import React from 'react'
import { login } from '../../state/auth-reducer'
import style from './Login.module.scss'
import LoginForm from './LoginForm/LoginForm'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getCaptchaUrlState, getIsAuth } from '../../selectors/auth-selectors';

const Login = ({ login, isAuth, captchaUrl }) => {

	const sendData = (formData) => {
		login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}
	if (isAuth) {
		return <Redirect to={"/profile"} />
	}
	return (
		<div className={style.login}>
			<h1 className={style.login__title}>Login</h1>
			<LoginForm onSubmit={sendData} captchaUrl={captchaUrl} />
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: getIsAuth(state),
	captchaUrl: getCaptchaUrlState(state)
})

export default connect(mapStateToProps, { login })(Login)