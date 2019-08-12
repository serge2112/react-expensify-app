import React from 'react';
import ReactDOM from 'react-dom';

// Creating Stateless Component
const Info = (props) => (
	<div>
		<h1>Info</h1>
		<div>The info is: {props.info}</div>
	</div>
);

// Createing function (HOC) to wrap components
const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private Info. Please dont share</p>}
			<WrappedComponent {...props} />
		</div>
	);
}
	
const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthenticated && <WrappedComponent {...props}/>}
		</div>
	);
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// Rendering high order component
//ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));