import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseSummary from '../components/ExpenseSummary';

const ExpenseDashboardPage = () => (
	<div>
		<ExpenseListFilter /> 
		<ExpenseSummary />
		<ExpenseList/>
	</div>	
);

export default ExpenseDashboardPage;
