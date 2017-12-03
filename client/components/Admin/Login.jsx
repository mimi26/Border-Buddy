import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from 'material-ui/Button';
import { TextField } from 'redux-form-material-ui';
import { Link } from 'react-router';
import { Card } from 'material-ui/Card';
import { signupLoginStyle } from './styles';

const required = value => value == null ? 'Required' : undefined;

const AdminLogin = ({ handleSubmit, pristine, reset, submitting, handleEmailChange, handlePasswordChange }) => {

	const style = signupLoginStyle;

	return (
		<Card style={style.card}>
			<div>
				<h3 style={style.title}>Admin Login</h3>
				<form onSubmit={handleSubmit}>
					<Field 
						name="email" 
						component={TextField}
						hintText="Email"
						validate={required}
						onChange={handleEmailChange}
						style={style.form}
					/>
					<Field 
						name="password" 
						type="password"
						component={TextField}
						hintText="Password" 
						validate={required}
						onChange={handlePasswordChange}
						style={style.form}
					/>
					<Button 
						type="submit"
						raised
						disabled={pristine || submitting}
						primary={true} 
						style={style.button}
					>Login</Button>
				</form>
			</div>
		</Card>
	)

}


export default reduxForm({
	form: "adminLogin"
})(AdminLogin);