import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  events: [],
};

const eventsApi = "https://64af12f7c85640541d4e1f45.mockapi.io/globalEvents";
export const getEvents = createAsyncThunk(
  "eventsGlobal/getEvents",
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

export const createEvent = createAsyncThunk(
  "eventsGlobal/createEvent",
  async (newEvent) => {
    try {
      const formattedEvent = {
        ...newEvent,
        start: moment(newEvent.start).format("YYYY-MM-DD hh:mm a"),
        end: moment(newEvent.end).format("YYYY-MM-DD hh:mm a"),
      };
      let response = await fetch(eventsApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedEvent),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateEvent = createAsyncThunk(
  "eventsGlobal/updateEvent",
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

export const deleteEvent = createAsyncThunk(
  "eventsGlobal/deleteEvent",
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

const eventsGlobalSlice = createSlice({
  name: "eventsGlobal",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.fulfilled, (state, action) => {
        console.log(action);
        state.events = action.payload;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        console.log(action);
        state.events.push(action.payload);
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        console.log(action);
        const { id, updatedEvent } = action.payload;
        const index = state.events.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.events[index] = updatedEvent;
        }
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        console.log(action);
        state.events = state.events.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export default eventsGlobalSlice.reducer;
