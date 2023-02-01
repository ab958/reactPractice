import { createSlice,PayloadAction } from '@reduxjs/toolkit';

interface Value {
  value: IAPI[]
}

interface IAPI {
  age: number,
  name : string,
  colour: string
}

const initialState: Value = {
    value: [],
}

export const ApiSlice = createSlice({
    name: 'api',
    initialState,
    reducers:{
        addorder: (state, action:PayloadAction<IAPI>) => { 
          state.value.push(action.payload)  
        },
        // adddish: (state, action:PayloadAction<FoodPayload>) => { 
        //     state.value.forEach(customer => {
        //       if(customer.id === action.payload.id){
        //         customer.order.push(action.payload.food)
        //       }
        //     })  
        //   } 
    } 
})

export const { addorder } = ApiSlice.actions
export default ApiSlice.reducer