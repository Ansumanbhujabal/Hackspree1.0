import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

const eventsApi = "https://64af12f7c85640541d4e1f45.mockapi.io/joinedEvents";

export const getJoinedEvents = createAsyncThunk(
  "joinedEvents/getJoinedEvents",
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

export const postJoinedEvent = createAsyncThunk(
  "joinedEvents/postJoinedEvent",
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

export const updateJoinedEvent = createAsyncThunk(
  "joinedEvents/updateJoinedEvent",
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

export const deleteJoinedEvent = createAsyncThunk(
  "joinedEvents/deleteJoinedEvent",
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

const joinedEventsSlice = createSlice({
  name: "joinedEvents",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getJoinedEvents.fulfilled, (state, action) => {
        console.log(action);
        state.events = action.payload;
      })
      .addCase(postJoinedEvent.fulfilled, (state, action) => {
        console.log(action);
        state.events.push(action.payload);
      })
      .addCase(updateJoinedEvent.fulfilled, (state, action) => {
        console.log(action);
        const { id, updatedEvent } = action.payload;
        const index = state.events.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.events[index] = updatedEvent;
        }
      })
      .addCase(deleteJoinedEvent.fulfilled, (state, action) => {
        console.log(action);
        state.events = state.events.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export default joinedEventsSlice.reducer;
