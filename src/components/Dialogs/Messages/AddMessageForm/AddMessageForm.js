import React, { Component } from 'react'
import style from '../Messages.module.scss'
import { Field, reduxForm } from 'redux-form';
import cn from 'classnames';

let AddMessageForm = ({ handleSubmit }) => {

	return (
		<form onSubmit={handleSubmit} className={style.dialogs__add} >
			<Field type="text" name="newMessageText" placeholder="Enter your message" component="textarea" className={cn(style.dialogs__textarea, "textarea")} />
			<button className={style.dialogs__btn} ></button>
		</form >
	)
}
AddMessageForm = reduxForm({ form: 'dialogsMessage' })(AddMessageForm)

export default AddMessageForm