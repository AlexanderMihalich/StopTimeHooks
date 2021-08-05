import React from 'react'
import style from '../Login.module.scss'
import styleError from '../../common/FormsControls/FormsControls.module.scss'
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { createField, Input } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

let LoginForm = ({ handleSubmit, error, captchaUrl }) => {

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<div className={`${style.form__item} ${error ? styleError.error__span : ""}`}>
				{createField("text", "email", "Email", Input, [required])}
			</div >
			{error && <div className={styleError.form__error}>
				{error}
			</div>}
			<div className={`${style.form__item} ${error ? styleError.error__span : ""}`}>
				{createField("password", "password", "Password", Input, [required, maxLength10])}
			</div >
			{captchaUrl && <div>
				<img alt="" src={captchaUrl} />
				<div className={`${style.form__item} ${style.form__captcha} ${error ? styleError.error__span : ""}`}>
					{createField("text", "captcha", "Symbols from image", Input, [required])}
				</div >
			</div>}
			<div className={style.form__item}>
				<Field id="rememberMe" type="checkbox" name="rememberMe" component='input' />
				<label htmlFor="rememberMe" className={style.form__label}>remember me</label>
			</div>
			<div className={style.form__item}>
				<button className={style.form__btn}>Login</button>
			</div>
		</form>
	)
}
LoginForm = reduxForm({ form: 'login' })(LoginForm)


export default LoginForm