import React from "react";
import { useDispatch } from "react-redux";
import { addorder } from "../features/orderSlice";
import { removeReservation } from "../features/reservationSlice";

export default function ReservationCard({name,index}: any){

    const disptach = useDispatch()
    const trigger = () =>{
        disptach(removeReservation(index))
        disptach(addorder(name))
    }

    return <div onClick={trigger} className="reservation-card-container">{name}</div>
}