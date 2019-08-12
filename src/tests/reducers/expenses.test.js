import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from 'uuid';
import moment from 'moment';

test('should test default state', () => {
	const state = expensesReducer(undefined, '@@INIT');
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};

	const state = expensesReducer(expenses, action);

	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id non existent', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};

	const state = expensesReducer(expenses, action);

	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const action = {
		type: 'ADD_EXPENSE',
		expense: {
			id: uuid(),
			description: 'Cable',
			note: 'Spectrum',
			amount: 595,
			createdAt: moment(0).valueOf() 
		}
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			amount: 200000
		}		
	};

	const state = expensesReducer(expenses, action);
	expect(state[1].amount).toEqual(200000);
});

test('should not edit an expense if not found', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			amount: 200000
		}		
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});