import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../fixtures/filters';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(<ExpenseListFilter 
		filters={filters}
		setTextFilter={setTextFilter}
		sortByDate={sortByDate}
		sortByAmount={sortByAmount}
		setStartDate={setStartDate}
		setEndDate={setEndDate}
		/>);
});

test('should render expense filter correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render expense filter with alt data correctly', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
	const value = 'New Filter Text';
	wrapper.find('input').simulate('change', {
		target: { value }
	});
	expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
	const value = 'date';
	wrapper.setProps({
		filters: altFilters
	});
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
	const value = 'amount';
	wrapper.setProps({
		filters: filters
	});
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
	const startDate = moment(0).add(2, 'years');
	const endDate = moment(0).add(3, 'years');
	
	wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
	expect(setStartDate).toHaveBeenLastCalledWith(startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(endDate);		
});

test('should handle date focus changes', () => {
	const calendarFocus = 'startDate';
	wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocus);
	expect(wrapper.state('calendarFocus')).toBe(calendarFocus);
});