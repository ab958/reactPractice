import { createSlice,PayloadAction } from '@reduxjs/toolkit';

const initialState:{ value: string[],dishes: string[] } = {
    value: [],
    dishes: []
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        addorder: (state, action:PayloadAction<string>) => { 
          state.value.push(action.payload)  
        },
        adddish: (state, action:PayloadAction<string>) => { 
            state.dishes.push(action.payload)  
          } 
    } 
})

export const { addorder,adddish } = orderSlice.actions
export default orderSlice.reducer