import React from "react";
import { useDispatch } from "react-redux";
import { orderItems } from "../../actions/actions";

export default function OrderItems (){

    const dispatch= useDispatch();

    return (
        <>
            <label htmlFor="Order">Order</label>
            <select name="" id="" onChange={e => dispatch(orderItems(e.target.value))}>
                <optgroup label='Alphabetic Name'>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </optgroup>
                <optgroup label='By Attack'>
                    <option value="10-1">Higher to lower</option>
                    <option value="1-10">Lower to higher</option>
                </optgroup>
            </select>
        </>
    )
};