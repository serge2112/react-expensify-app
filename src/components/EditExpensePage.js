import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpenses } from '../actions/expenses';

// Refactor EditExpensePage to be a class based component
// Setup mapDispatchToprops editExpense and RemoveExpense

// Should render EditExpensePage
// snapshot

// Should handle editExpense
// Spies

// Should handle removeExpense
// Spies

export class EditExpensePage extends React.Component{
	onSubmit = (expense) => {
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};
	
	onRemove = () => {
		this.props.startRemoveExpenses({id: this.props.expense.id});
		this.props.history.push('/');
	};

	render(){
		return (
			<div>
				<ExpenseForm 
					expense={this.props.expense}
					onSubmit={this.onSubmit}/>
					<button onClick={this.onRemove}>Remove</button>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return{
		expense: state.expenses.find(expense => expense.id === props.match.params.id)
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
		startRemoveExpenses: (data) => dispatch(startRemoveExpenses(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
