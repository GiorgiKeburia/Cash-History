import React, { useState } from 'react';
import ExpenseDate from './ExspenseDate';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
	// States
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle('Updated!');
		console.log(title);
	};
	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{`$ ${props.amount}`}</div>
			</div>
			<button className="btn" onClick={clickHandler}>
				Change
			</button>
		</div>
	);
};

export default ExpenseItem;
