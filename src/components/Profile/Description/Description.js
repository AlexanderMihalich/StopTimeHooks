import React, { useState } from 'react'
import style from './Description.module.scss'
import Preloader from '../../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileInfoForm from './ProfileInfoForm/ProfileInfoForm';
import { ImageUnderstudy } from '../../../utils/ImageUnderstudy/ImageUnderstudy';
import cn from 'classnames';

const Description = ({ profile, isOwner, status, updateStatus, savePhoto, saveProfile }) => {

	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return (<Preloader />)
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}
	const onSubmit = (formData) => {
		saveProfile(formData).then(
			() => {
				setEditMode(false)
			}
		)
	}

	return (
		<div className={style.description} >
			<div className={style.description__avatar}>
				{ImageUnderstudy(profile.photos.large)}
				{isOwner &&
					<div className={style.description__files}>
						<input type={"file"} accept=".jpg, .png" id="formImage" className={style.description__filesInput} onChange={onMainPhotoSelected} />
						<span className={cn(style.description__btn, style.description__btn_1)}>Choose file</span>
					</div>
				}
			</div>
			{editMode
				? < ProfileInfoForm onSubmit={onSubmit} profile={profile} initialValues={profile} status={status} updateStatus={updateStatus} />
				: < ProfileInfo goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus} />
			}

		</div>
	)
}

export default Description

