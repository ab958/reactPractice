import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from '../features/reservationSlice';
import orderReducer from '../features/orderSlice';

export const store = configureStore({
    reducer: {
        reservations: reservationReducer,
        order: orderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDisptach = typeof store.dispatch