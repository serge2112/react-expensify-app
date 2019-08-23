import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpenseSummary} from '../../components/ExpenseSummary';

test('Should show summary with one expense', () => {	
	const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]}/>);
	expect(wrapper).toMatchSnapshot();
});

test('Should show summary with Multiple expense', () => {	
	const wrapper = shallow(<ExpenseSummary expenses={expenses}/>);
	expect(wrapper).toMatchSnapshot();
});