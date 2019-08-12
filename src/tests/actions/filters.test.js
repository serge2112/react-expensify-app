import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('Generate setStartDate action object', () => {
	const action = setStartDate(moment(0));

	expect(action).toEqual({
		'type': 'SET_START_DATE',
		'startDate': moment(0)
	});
});

test('Generate setEndDate action object', () => {
	const action = setEndDate(moment(0));

	expect(action).toEqual({
		'type': 'SET_END_DATE',
		'endDate': moment(0)
	});
});

test('Generate setTextFilter action object', () => {
	const action = setTextFilter('Rent');

	expect(action).toEqual({
		'type': 'SET_TEXT_FILTER',
		'text': 'Rent'
	});
});

test('Generate setTextFilter action object with default value', () => {
	const action = setTextFilter();

	expect(action).toEqual({
		'type': 'SET_TEXT_FILTER',
		'text': ''
	});
});

test('Generate sortByDate action object', () => {
	const action = sortByDate();

	expect(action).toEqual({
		'type': 'SORT_BY_DATE'
	});
});

test('Generate sortByAmount action object', () => {
	const action = sortByAmount();

	expect(action).toEqual({
		'type': 'SORT_BY_AMOUNT'
	});
});

test()
