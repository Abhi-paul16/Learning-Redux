import React from 'react'
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';

import actionCreators from "../state/index"

export const Shop = () => {
     const dispatch =  useDispatch();
    return (
        <div>
            <h2>Withraw/Deposit</h2>
            <button className=" btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(1000))}} >-</button>
            Update Balance
            <button className="btn btn-primary mx-2"  onClick={()=>{dispatch(actionCreators.depositMoney(1000))}}>+</button>
        </div>
    )
}
