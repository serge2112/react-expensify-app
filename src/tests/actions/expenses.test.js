import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
	startAddExpense, 
	addExpense, 
	editExpense, 
	startEditExpense,
	removeExpense,
	startRemoveExpenses, 
	setExpenses, 
	startSetExpenses 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

const uid = 'thisismyuseridfortesting';
const defaultAuthState = { auth: { uid }};

beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({id, description, note, amount, createdAt}) => {
		expensesData[id] = { description, note, amount, createdAt };
	});
	database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
})

test('should setup remove expense action object', () => {
	const action = removeExpense({id: '123abc'});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('Should remove expenses from firebase', (done) => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[2].id;

	store.dispatch(startRemoveExpenses({id})).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'REMOVE_EXPENSE',
			id
		});

		return database.ref(`users/${uid}/expenses/${id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toBeFalsy();
		done();
	})
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

test('should edit expense in firebase', (done) => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[0].id;
	const updates = { amount: 21045 };

	store.dispatch(startEditExpense(id, updates)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'EDIT_EXPENSE',
			id,
			updates
		});

		return database.ref(`users/${uid}/expenses/${id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val().amount).toBe(updates.amount);
		done();
	});
});

test('should setup add expense action object with provided values', () => {
	const action = addExpense(expenses[0]);

	expect(action).toEqual({
		type: 'ADD_EXPENSE', 
		expense: expenses[0]	
	});
});

// Passing done function allows test case to wait until
// the asyncrhronous call return its value
test('should add expense to database and store', (done) => {
	const store = createMockStore(defaultAuthState);
	const expenseData = {
		description: 'Nintendo Switch',
		amount: 23500,
		note: 'With Super Mario Odisey',
		createdAt: 1000
	}

	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions();

		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});

		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
		
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData);
		done();
	});
});

test('should add expense with default values to database and store', (done) => {
	const store = createMockStore(defaultAuthState);
	const defaultExpense = {						
		description: '',
		note: '',
		amount: 0,
		createdAt: 0				
	}

	store.dispatch(startAddExpense({})).then(() => {
		const actions = store.getActions();		

		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),				
				...defaultExpense				
			}
		});

		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
		
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(defaultExpense);
		done();
	});
});

test('should setup set expense action with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	})
})

test('should fetch the expenses from firebase', (done) => {
	const store = createMockStore(defaultAuthState);

	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();

		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});

		done();
	})
})	

