import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Card } from 'material-ui/Card';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signupLoginStyle } from './styles';
import { minimumLength, required, phone } from '../../utils/validations';

class AdminSignUp extends Component {

	render() {

		const style = signupLoginStyle;
		const { handleSubmit, pristine, submitting,
		handleEmailChange, handlePasswordChange, handlePhoneChange, valid } = this.props;

		return (
			<Card style={style.card}>
				<div>
					<h3 style={style.title}>Admin SignUp</h3>
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
							hintText="Password (at least 8 characters)"
							validate={[required, minimumLength]}
							onChange={handlePasswordChange}
							style={style.form}
						/>
						<Field 
							name="phone" 
							component={TextField}
							hintText="Phone Number"
							validate={[phone]}
							onChange={handlePhoneChange}
							style={style.form}
						/>
						<RaisedButton
							type="submit"
							label="Sign Up"
							disabled={pristine || submitting || !valid}
							primary={true} 
							style={style.button}
						/>
					</form>
				</div>
			</Card>
		)
	}
}


AdminSignUp = reduxForm({
	form: "adminSignup"
})(AdminSignUp);

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AdminSignUp);