import { createSlice } from "@reduxjs/toolkit";
import events from '../../data/events';

const initialState = {
    events: events,
}

const eventsGlobalSlice = createSlice({
    name: 'eventsGlobal',
    initialState
});

export default eventsGlobalSlice.reducer;