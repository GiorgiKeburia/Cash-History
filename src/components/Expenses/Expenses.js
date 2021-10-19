import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import Noitem from '../Alerts/Noitem';

import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		console.log(`change: ${filteredYear}`);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses-div">
				<ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
				{filteredExpenses.length === 0 ? <Noitem>There is no expense!</Noitem> : filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
			</Card>
		</div>
	);
};
export default Expenses;
