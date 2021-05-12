import React ,{useContext} from 'react'
import {GlobalContext} from  '../context/GlobalState';
export const Transaction = ({transaction}) => {
    const sign = transaction.amount<0?'-':'+';
    const wallClass = transaction.amount<0?'minus':'plus';
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <li className={wallClass}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick ={() => deleteTransaction(transaction.id)}className="delete-btn">x</button>
        </li>
    )
}
