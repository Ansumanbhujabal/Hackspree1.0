import { createSlice } from "@reduxjs/toolkit";
import events from "../../data/events";

const initialState = {
    joinedEvents: events,
    createdEvents: events,
    profilePhoto: "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg",
    username: "Tori Parham",
}

const userDataSlice = createSlice({
    name: 'userdata',
    initialState
})

export default userDataSlice.reducer;