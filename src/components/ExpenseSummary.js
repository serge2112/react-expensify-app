import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectorExpenses from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expenses-total';
import { Link } from 'react-router-dom';

export const ExpenseSummary = (props) => {
	const expensesWord = props.expenses.length === 1 ? 'expense' : 'expenses';
	const formattedAmount = numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00');

	return (
		<div className='page-header'>
			<div className="content-container">
				<h1 className="page-header__title">Showing <span>{props.expenses.length}</span> {expensesWord}, adding up <span>{formattedAmount}</span></h1>
				<Link className="button" to="/create">Add Expense</Link>
			</div>			
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		expenses: selectorExpenses(state.expenses, state.filters)
	}
};

export default connect(mapStateToProps)(ExpenseSummary);