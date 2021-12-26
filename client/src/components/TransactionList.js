import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export function TransactionList() {
	const { transactions, getTransactions } = useContext(GlobalContext);
	// we can pull out anything from GlobalContext with useContext
	// instead of context as below, descructuring to get transactions as above
	// const context = useContext(GlobalContext);
	// console.log(context)

	useEffect(() => {
		getTransactions();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h3>History</h3>
			<ul className='list'>
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</>
	);
}
