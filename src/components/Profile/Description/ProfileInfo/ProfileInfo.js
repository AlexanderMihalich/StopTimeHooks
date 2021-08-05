import React from 'react'
import style from '../Description.module.scss'
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import cn from 'classnames';

const ProfileInfo = ({ profile, isOwner, status, updateStatus, goToEditMode }) => {

	return (
		<div className={cn(style.description__info, style.info)}>
			<h2 className={`${style.info__name} title`} >{profile.fullName}</h2>
			<ul className={style.info__list}>
				<li>
					<ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner} />
				</li>
				<li className={style.info__item}><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</li>
				{profile.lookingForAJob &&
					<li className={style.info__item}><b>My professional skils</b>: {profile.lookingForAJobDescription}</li>
				}
				<li className={style.info__item}><b>About me</b>: {profile.aboutMe} </li>
				{/* <li className={style.info__item}><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
				})}
				</li> */}
			</ul>
			{isOwner &&
				<div className={style.info__button}>
					<button onClick={goToEditMode} className={cn(style.description__btn, style.description__btn_2)} >Edit</button>
				</div>
			}
		</div>
	)
}

// const Contact = ({ contactTitle, contactValue }) => {
// 	return <li className={cn(style.info__item, style.info__item_c)}><b>{contactTitle}</b>: {contactValue} </li>
// }

export default ProfileInfo