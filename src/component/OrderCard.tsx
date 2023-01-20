import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { adddish } from "../features/orderSlice";


export default function OrderCard({ name, index }: any) {
  const [orderNameInput, setorderNameInput] = useState('');
  const order = useSelector((state:RootState) => state.order.dishes);

  const dispatch = useDispatch();

  const handleAddOrder = () =>{
    if(!orderNameInput) return;
    dispatch(adddish(orderNameInput))
    setorderNameInput('')
  }

    return <div className="customer-food-container">
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        {order.length > 0 &&  order.map((name) =>{
          return <div className="customer-food">{name}</div>
        })}
        <div className="customer-food-input-container">
          <input value={orderNameInput} onChange = {e => setorderNameInput(e.target.value) }/>
          <button onClick={handleAddOrder}>Add</button>
        </div>
      </div>
    </div>
  </div>;
}