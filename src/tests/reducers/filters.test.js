import moment from 'moment'
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
	const state = filtersReducer(undefined, '@@INIT');

	expect(state).toEqual({
		text: '',
		sortBy: 'date', // date or amount
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sort by amount', () => {
	const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
	expect(state.sortBy).toBe('amount');
});

test('should set sort by date', () => {
	const defaultState = {
		text: '',
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	};

	const action = { type: 'SORT_BY_DATE' };

	const state = filtersReducer(defaultState, action);
	expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
	const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'my filter'});
	expect(state.text).toBe('my filter');
})

test('should set start date filter', () => {
	const startDate = moment();
	const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: startDate })
	expect(state.startDate).toEqual(startDate);
});

test('should set end date filter', () => {
	const endDate = moment();
	const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: endDate })
	expect(state.endDate).toEqual(endDate);
});