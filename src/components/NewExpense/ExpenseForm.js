import React, { useState } from 'react';
import Button from '../Atoms/Button';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="expense-form--inputs">
				<div className="expense-form--input">
					<label className="label">Title</label>
					<input onChange={titleChangeHandler} type="text" value={enteredTitle} />
				</div>
				<div className="expense-form--input">
					<label>Amount</label>
					<input onChange={amountChangeHandler} type="number" min="0.01" step="0.01" value={enteredAmount} />
				</div>
				<div className="expense-form--input">
					<label>Date</label>
					<input onChange={dateChangeHandler} type="date" min="2000-01-02" max="2022-02-02" value={enteredDate} />
				</div>
			</div>
			<div className="expense-submit">
				<Button onClick={props.cancel} type="click">
					Cancel
				</Button>
				<Button type="submit">Add</Button>
			</div>
		</form>
	);
};

export default ExpenseForm;
