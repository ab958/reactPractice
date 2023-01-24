import { createSlice,PayloadAction } from '@reduxjs/toolkit';

interface Value {
  value: Customer[]
}

interface Customer {
  id: string
  name : string,
  order: string[]
}

interface FoodPayload{
  id: string,
  food: string
}

const initialState: Value = {
    value: [],
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        addorder: (state, action:PayloadAction<Customer>) => { 
          state.value.push(action.payload)  
        },
        adddish: (state, action:PayloadAction<FoodPayload>) => { 
            state.value.forEach(customer => {
              if(customer.id === action.payload.id){
                customer.order.push(action.payload.food)
              }
            })  
          } 
    } 
})

export const { addorder,adddish } = orderSlice.actions
export default orderSlice.reducer