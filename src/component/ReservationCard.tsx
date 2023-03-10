import { useDispatch } from "react-redux";
import { addorder } from "../features/orderSlice";
import { removeReservation } from "../features/reservationSlice";
import { v4 as uuid } from 'uuid';

export default function ReservationCard({name,index}: any){

    const disptach = useDispatch()
    const trigger = () =>{
        disptach(removeReservation(index))
        console.log({
            id: uuid(),
            name,
            order: [] 
        })
        disptach(addorder({
            id: uuid(),
            name,
            order: [] 
        }))
    }

    return <div onClick={trigger} className="reservation-card-container">{name}</div>
}