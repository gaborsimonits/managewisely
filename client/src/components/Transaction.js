// to create in order to not to hard code transaction data

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.amount < 0 ? "-" : "+";
	return (
		<li className={transaction.amount < 0 ? "minus" : "plus"}>
			{transaction.text}{" "}
			<span>
				{sign}${numberWithCommas(Math.abs(transaction.amount))}
			</span>
			<button
				className='delete-btn'
				onClick={() => deleteTransaction(transaction.id)}
			>
				x
			</button>
		</li>
	);
};
