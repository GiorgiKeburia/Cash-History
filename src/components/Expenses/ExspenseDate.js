import './ExpensDate.css';

const ExpenseDate = (props) => {
	const month = props.date.toLocaleString('en-US', { month: 'long' });
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.getFullYear();

	return (
		<div className="expense-item__date">
			<div className="data-month">{month}</div>
			<div className="list">
				<div className="data-day">{`${day}/`}</div>
				<div className="data-year">{year}</div>
			</div>
		</div>
	);
};
export default ExpenseDate;
