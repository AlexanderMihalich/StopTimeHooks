import React from 'react'
import style from '../Description.module.scss'
import styleError from '../../../common/FormsControls/FormsControls.module.scss'
import ProfileStatusForm from '../ProfileStatusForm/ProfileStatusForm';
import { reduxForm, Field } from 'redux-form';
import { createField, Input, Textarea } from '../../../common/FormsControls/FormsControls';
import cn from 'classnames';

let ProfileInfoForm = ({ profile, status, updateStatus, handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit} className={cn(style.description__info, style.info, style.formInfo)}>
			<h2 className={style.info__name} >{createField("text", "fullName", "Full name", Input, [])}</h2>
			<ul>
				<li className={style.formInfo__item_status}>
					<ProfileStatusForm status={status} updateStatus={updateStatus} />
				</li>
				<li className={cn(style.formInfo__item, style.formInfo__checkbox)}>
					<label htmlFor="LookingForAJob" className={style.formInfo__label}><b>Looking for a job</b>:</label>
					<Field id="LookingForAJob" type="checkbox" name="LookingForAJob" component='input' />
				</li>
				<li className={style.formInfo__item}><b>My professional skils</b>: {createField(null, "lookingForAJobDescription", "My professional skils", Textarea, [])}</li>
				<li className={style.formInfo__item}><b>About me</b>:  {createField(null, "aboutMe", "About me", Textarea, [])} </li>
				{/* <li className={cn(style.formInfo__item, style.formInfo__item_contact)}><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
					return <ContactForm key={key} contactTitle={key} contactValue={createField("text", `contacts. ${key}`, key, Input, [])} />
				})}
				</li> */}
			</ul>
			<div className={style.info__button}>
				<button className={cn(style.description__btn, style.description__btn_2)} > Save</button>
			</div>
			{error && <div className={styleError.form__error}>{error}</div>}
		</form>
	)
}

// const ContactForm = ({ contactTitle, contactValue }) => {
// 	return <li className={cn(style.info__item_c, style._active)}><b>{contactTitle}:</b> {contactValue} </li>
// }

ProfileInfoForm = reduxForm({ form: 'edit-profile' })(ProfileInfoForm)

export default ProfileInfoForm