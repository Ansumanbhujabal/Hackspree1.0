import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import { useEffect } from "react";

const initialState = {
  events: [],
};

const eventsApi = "https://64af12f7c85640541d4e1f45.mockapi.io/createdEvents";

export const getUserEvents = createAsyncThunk(
  "joinedEvents/getUserEvents",
  async () => {
    try {
      const response = await fetch(eventsApi);
      console.log(response);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);


export const postUserEvent = createAsyncThunk(
  "userEvents/postUserEvent",
  async (newEvent) => {
    try {
      let response = await fetch(eventsApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateUserEvent = createAsyncThunk(
  "userEvents/updateUserEvent",
  async (updatedObject) => {
    try {
      const response = await fetch(eventsApi + `/${updatedObject.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObject.updatedEvent),
      });

      const data = await response.json();
      return { id: updatedObject.id, updatedEvent: data };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const deleteUserEvent = createAsyncThunk(
  "userEvents/deleteUserEvent",
  async (id) => {
    try {
      const response = await fetch(eventsApi + `/${id}`, {
        method: "DELETE",
      });

      return response.json();
    } catch (error) {
      console.error(error);
    }
  }
);

const userEventsSlice = createSlice({
  name: "userEvents",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserEvents.fulfilled, (state, action) => {
        console.log(action);
        state.events = action.payload;
      })
      .addCase(postUserEvent.fulfilled, (state, action) => {
        console.log(action);
        state.events.push(action.payload);
      })
      .addCase(updateUserEvent.fulfilled, (state, action) => {
        console.log(action);
        const { id, updatedEvent } = action.payload;
        const index = state.events.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.events[index] = updatedEvent;
        }
      })
      .addCase(deleteUserEvent.fulfilled, (state, action) => {
        console.log(action);
        state.events = state.events.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export default userEventsSlice.reducer;
