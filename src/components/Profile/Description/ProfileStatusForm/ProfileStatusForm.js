import React, { useEffect, useState } from 'react'
import style from '../Description.module.scss'

const ProfileStatus = ({ status, updateStatus }) => {

	let [statusHook, setStatus] = useState(status);

	useEffect(() => {
		setStatus(status)
	}, [status])

	const deactivateEditMode = () => {
		updateStatus(statusHook)
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<input onBlur={deactivateEditMode} onChange={onStatusChange} type="text" className={style.info__statusForm} value={statusHook} />
	)
}

export default ProfileStatus