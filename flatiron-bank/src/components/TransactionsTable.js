import React from "react";

export default function TransactionsTable({ transactions }) {
    const transactionItems = transactions.map((transaction) => (
        <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.amount}</td>
                    </tr>
    ));
        return (
            <table className="table table-striped"> 
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionItems}
                </tbody>
            </table>
        )
}
