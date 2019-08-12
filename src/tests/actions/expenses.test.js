import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
	const action = removeExpense({id: '123abc'});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should setup edit expense action object', () => {
	const action = editExpense('123abc', { note: 'new note' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'new note'
		}
	})
})

test('should setup add expense action object with provided values', () => {
	const action = addExpense({	
		description: 'rent',
		note: 'this is the rent for last month',
		amount: 180000,
		createdAt: 1000
	});

	expect(action).toEqual({
		type: 'ADD_EXPENSE', 
		expense: {
			description: 'rent',
			note: 'this is the rent for last month',
			amount: 180000,
			createdAt: 1000,
			id: expect.any(String)
		}		
	});
});

test('should setup add expense action object with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE', 
		expense: {
			description: '',
			note: '',
			amount: 0,
			createdAt: 0,
			id: expect.any(String)
		}
	});
});