import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('Render expense dashboard', () => {
	const wrapper = shallow(<ExpenseDashboardPage />);
	expect(wrapper).toMatchSnapshot();
});