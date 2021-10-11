import React from "react";
import { useDispatch } from "react-redux";
import { orderAttackAsc, orderAttackDesc, orderDefault, orderNameAsc, orderNameDesc } from "../../actions/actions";

export default function OrderItems (){

    const dispatch = useDispatch();

    const orderItems = ({target}) => {

        switch(target.value) {
            case "A-Z": {
                dispatch(orderNameAsc())
                break;
            }
            case "Z-A": {
                dispatch(orderNameDesc())
                break;
            }
            case "attack_asc": {
                dispatch(orderAttackAsc())
                break;
            }
            case "attack_desc": {
                dispatch(orderAttackDesc())
                break;
            }
            default: {
                dispatch(orderDefault())
            }
        }
    };


    return (
        <>
            <label htmlFor="Order">Order</label>
            <select name="" id="" onClick={(e) => orderItems(e)}>
                <optgroup label='Alphabetic Name'>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </optgroup>
                <optgroup label='By Attack'>
                    <option value="attack_desc">Higher to lower</option>
                    <option value="attack_asc">Lower to higher</option>
                </optgroup>
                    <option value="reset">Default Order</option>
            </select>
        </>
    )
};