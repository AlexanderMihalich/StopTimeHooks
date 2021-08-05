import React, { useEffect, useState } from 'react'
import style from '../Description.module.scss'

const ProfileStatus = ({ status, updateStatus, isOwner }) => {

	let [editMode, setEditMode] = useState(false);
	let [statusHook, setStatus] = useState(status);

	useEffect(() => {
		setStatus(status)
	}, [status])

	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false)
		updateStatus(statusHook)
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		(!editMode)
			? <span onDoubleClick={activateEditMode} className={style.info__status}>......{status || "No status"}</span>
			: (isOwner)
				? <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} type="text" className={style.info__statusInput} value={statusHook} />
				: <span onDoubleClick={activateEditMode} className={style.info__status}>......{status || "No status"}</span>
	)
}

export default ProfileStatus