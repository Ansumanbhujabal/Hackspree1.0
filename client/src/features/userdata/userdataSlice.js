import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profilePhoto: "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg",
    username: "Tori Parham",
}

const userDataSlice = createSlice({
    name: 'userdata',
    initialState
})

export default userDataSlice.reducer;