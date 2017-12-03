import React from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router';

const style = {
	width: '100%',

};

export default () => (
	<div className="navbar col-12">
		<div className="inline-block col-4">
			<Link to="/why">
				<Button raised style={style} >Why Border Buddy?</Button>
			</Link>
		</div>
		<div className="inline-block col-4">
			<Link to="/register" className={'register-link'}>
				<Button raised style={style} >Register</Button>
			</Link>
		</div>
		<div className="inline-block col-4">
			<Link to="/about">
				<Button raised style={style} >About Us</Button>
			</Link>
		</div>
	</div>
);
