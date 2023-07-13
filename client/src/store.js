import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './features/eventsGlobal/eventsGlobalSlice';
import userReducer from './features/userdata/userdataSlice';
import joinedEventsReducer from './features/joinedEvents/joinedEventsSlice';
import userEventsReducer from './features/userEvents/userEventsSlice';

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        userdata: userReducer,
        joinedEvents: joinedEventsReducer,
        userEvents: userEventsReducer,

    },
});