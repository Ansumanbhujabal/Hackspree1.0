import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: [],
}

const eventsGlobalSlice = createSlice({
    name: 'eventsGlobal',
    initialState
});

export default eventsGlobalSlice.reducer;