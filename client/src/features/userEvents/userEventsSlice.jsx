import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    userEvents: [],
}

const eventsApi =
  "https://64af12f7c85640541d4e1f45.mockapi.io/createdEvents";

export const getUserEvents = createAsyncThunk(
  "userEvents/getUserEvents",
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
      return await response.json(); // parse the response body as JSON
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateUserEvent = createAsyncThunk(
  "userEvents/updateUserEvent",
  async (updatedObject) => { //receives the updatedObject that holds the id and updatedCollection
    try {
      const response = await fetch(eventsApi + `/${updatedObject.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObject.updatedEvent),
      });

      const data = await response.json();  // parse the response body as JSON

      return { id: updatedObject.id, updatedEvent: data }; // a destructured object that holds the id and the new data
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

      return response.json();  // parse the response body as JSON
    } catch (error) {
      console.error(error);
    }
  }
);

const userEventsSlice = createSlice({
    name: 'userEvents',
    initialState,
    extraReducers: (builder) => {
        //handles HTTP requests
        builder
          .addCase(getUserEvents.fulfilled, (state, action) => { //checks that GET is fulfilled, updates state
            //called in a useEffect on App.js to fill the collectionItems array with API data
            console.log(action);
            state.events = action.payload;
          })
    
    
          .addCase(postUserEvent.fulfilled, (state, action) => { //checks that POST is fulfilled, updates state
            console.log(action);
            state.events.push(action.payload); //pushes new data to the array
          })
    
          .addCase(updateUserEvent.fulfilled, (state, action) => { //checks that PUT is fulfilled, updates state
            console.log(action);
            const { id, updatedEvent } = action.payload; //destructures the object from the payload
            const index = state.events.findIndex((item) => item.id === id); //finds the item in state that matches the id
            if (index !== -1) {
              state.events[index] = updatedEvent; //replaces that item with updated post
            }
          })
    
          .addCase(deleteUserEvent.fulfilled, (state, action) => { //checks that DELETE is fulfilled, updates state
            console.log(action);
            // Remove the deleted album from the collectionItems array by filtering out the id
            state.events = state.events.filter(
              (item) => item.id !== action.payload.id
            );
          });
      },
    });

export default userEventsSlice.reducer;