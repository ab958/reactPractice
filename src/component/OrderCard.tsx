import { useState } from "react";
import { useDispatch } from "react-redux";
import { adddish } from "../features/orderSlice";


export default function OrderCard({ name, index,order,id }: any) {
  const [orderNameInput, setorderNameInput] = useState('');

  const dispatch = useDispatch();

  const handleAddOrder = () =>{
    if(!orderNameInput) return;
    dispatch(adddish({
      id,
      food: orderNameInput
    }))
    setorderNameInput('')
  }

    return <div className="customer-food-container">
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
      <div className="customer-food">
        {order.length > 0 &&  order.map((name: any) =>{ 
          return <p>{name}</p>
        })}
        </div>
        <div className="customer-food-input-container">
          <input value={orderNameInput} onChange = {e => setorderNameInput(e.target.value) }/>
          <button onClick={handleAddOrder}>Add</button>
        </div>
      </div>
    </div>
  </div>;
}