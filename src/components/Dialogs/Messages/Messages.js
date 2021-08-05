import React from 'react'
import style from './Messages.module.scss'

const Messages = ({ message }) => {

	return (
		<div className={style.dialogs__message}>
			<div className={style.dialogs__dialog}>
				{message}
			</div>
		</div>
	)
}

export default Messages