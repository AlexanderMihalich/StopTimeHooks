import React from 'react'
import style from '../AddPost.module.scss'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength30 = maxLengthCreator(30)

let AddNewPostForm = ({ handleSubmit }) => {
	return (
		<form form onSubmit={handleSubmit} >
			<Field name="newPostText" component={Textarea} validate={[maxLength30]} placeholder="Post message" />
			<button className={style.content__btn}>Add Post</button>
		</form>
	)
}

AddNewPostForm = reduxForm({ form: 'addPostProfile' })(AddNewPostForm)

export default AddNewPostForm