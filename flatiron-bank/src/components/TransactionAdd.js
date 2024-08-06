import React, { useState } from "react";

export default function TransactionAdd({ addTransaction }) {
    const [formItems, setFormItems] = useState({
        date:"",
        description:"",
        category:"",
        amount:"",
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction ({
            ...formItems,
            amount: parseFloat(formItems.amount)
        });
        setFormItems({ date: "", description: "", category: "", amount: ""});
    }

    const handleChange = (event) => {
setFormItems({ ...formItems, [event.target.name]: event.target.value});
}

    return (
        <form id="addForm" onSubmit={handleSubmit}>
            <input type="date" name="date" value={formItems.date} onChange={handleChange}></input>
            <input type="text" name="description" value={formItems.description} onChange={handleChange}></input>
            <input type="text" name="category" value={formItems.category} onChange={handleChange}></input>
            <input type="number" name="amount" value={formItems.amount} onChange={handleChange}></input>
            <button type="submit">Add Transaction</button>
        </form>
    );
}