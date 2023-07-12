import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './features/eventsGlobal/eventsGlobalSlice';
import userReducer from './features/userdata/userdataSlice';

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        userdata: userReducer,

    },
});