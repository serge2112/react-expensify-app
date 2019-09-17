import React from 'react';
import { shallow } from 'enzyme'
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';

test('should render header correctly', () => {
	const wrapper = shallow(<Header startLogOut={() => {}} />);
	expect(wrapper).toMatchSnapshot();
	// Bellow line is no more needed because I added 
	// snapshotSerializers in jest.config.json
	//expect(toJson(wrapper)).toMatchSnapshot();
	
	//expect(wrapper.find('h1').text()).toBe('Expensify');
	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call start logout', () => {
	const startLogOut = jest.fn();
	const wrapper = shallow(<Header startLogOut={startLogOut} />);
	wrapper.find('button').simulate('click');
	expect(startLogOut).toHaveBeenCalled();
});