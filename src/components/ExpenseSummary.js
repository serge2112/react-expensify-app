import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectorExpenses from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {
	const expensesWord = props.expenses.length === 1 ? 'expense' : 'expenses';
	const formattedAmount = numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00');

	return (
		<div>
			<h1>Showing {props.expenses.length} {expensesWord}, adding up {formattedAmount}</h1>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		expenses: selectorExpenses(state.expenses, state.filters)
	}
};

export default connect(mapStateToProps)(ExpenseSummary);