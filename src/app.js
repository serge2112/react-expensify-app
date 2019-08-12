import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

console.log(store.getState());

//Add 2 expenses
store.dispatch(addExpense({description: 'gas bill', amount: 3000, createdAt: 1000}))
store.dispatch(addExpense({description: 'water bill', amount: 1000}))
store.dispatch(addExpense({description: 'rent', amount: 150000}))

const state = store.getState();
//getVisibleExpenses
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
	<Provider store={store}>
		<AppRouter/>
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))

