import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>		
		<NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>		
		<NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>		
		<NavLink to="/help" activeClassName="is-active">Help</NavLink>
		<button onClick={startLogOut}>LogOut</button>		
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);
