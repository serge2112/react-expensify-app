import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectorExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
	<div>	
		{
			props.expenses.lenght === 0 ? 
			(
				<p>There are not any expenses to show</p>
			) : 
			(				
				props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense}/>)				
			)
		}				
	</div>
);

const mapStateToProps = (state) =>{
	return {
		expenses: selectorExpenses(state.expenses, state.filters)
	}
};

export default connect(mapStateToProps)(ExpenseList);