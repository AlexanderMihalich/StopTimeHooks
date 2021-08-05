import React from 'react'
import style from '../Dialogs.module.scss'

const MyMessage = ({ sms }) => {

	return (
		<div className={style.dialogs__myMessage}>
			<div className={style.dialogs__sms}>
				{sms}
			</div>
		</div>
	)
}

export default MyMessage