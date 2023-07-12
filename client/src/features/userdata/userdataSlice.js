import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    joinedEvents: [],
    createdEvents: [],
    profilePhoto: "",
}

const userDataSlice = createSlice({
    name: 'userdata',
    initialState
})

export default userDataSlice.reducer;