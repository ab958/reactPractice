import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import OrderCard from "./component/OrderCard";
import ReservationCard from "./component/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservationNameInput, setreservationNameInput] = useState('')

  const reservations = useSelector((state:RootState) => state.reservations.value)
  const order = useSelector((state:RootState) => state.order.value)

  const dispatch = useDispatch();

  const handleAddResvation = () =>{
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput))
    setreservationNameInput('')
  }

  

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name,index) =>{
                return <ReservationCard name= {name} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange = {e => setreservationNameInput(e.target.value) }/>
            <button onClick={handleAddResvation}>Add</button>
          </div>
        </div>
        {
          order.length > 0 && order.map((name,index) => {
            return <OrderCard name= {name.name} order={name.order} id= {name.id} />
          })
          
        }
      </div>
    </div>
  );
}

export default App;