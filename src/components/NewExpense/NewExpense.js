import { React, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Button from '../Atoms/Button';
import './NewExpense.css';

const NewExpsense = (props) => {
	const [check, setChack] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setChack(false);
	};

	const changeCheck = () => {
		setChack(true);
	};
	const cancelAdd = () => {
		setChack(false);
	};

	return (
		<div className="new-expenses">
			{!check && <Button onClick={changeCheck}>Add new Expons</Button>}
			{check && <ExpenseForm cancel={cancelAdd} onSaveExpenseData={saveExpenseDataHandler} />}
		</div>
	);
};

export default NewExpsense;
