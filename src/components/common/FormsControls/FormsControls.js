import React from 'react'
import style from './FormsControls.module.scss'
import { Field } from 'redux-form';


export const Element = Element => ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={`${style.form__control} ${hasError ? style.error : ""}`}>
			{Element === "textarea"
				? <Element {...input} {...props} className={`${style.form__textarea} textarea`} />
				: <Element {...input} {...props} className={style.form__element} />
			}
			{hasError && <span> {meta.error} </span>}
		</div>
	)
}
export const Input = Element("input");
export const Textarea = Element("textarea");

export const createField = (type, name, placeholder, component, validate) => (
	<Field type={type} name={name} placeholder={placeholder} component={component} validate={validate} className={style.form__input} />
)