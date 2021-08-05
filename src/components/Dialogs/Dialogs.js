import React from 'react'
import style from './Dialogs.module.scss'
import MessagesContainer from './Messages/MessagesContainer'
import AddMessageForm from './Messages/AddMessageForm/AddMessageForm';
import MyMessage from './MyMessage/MyMessage'

const Dialogs = ({ messages, newMessage, sendMessage }) => {

	let messagesElement = messages.map(m => <MessagesContainer message={m.message} key={m.id} />)
	let smsElement = newMessage.map(s => <MyMessage sms={s.sms} key={s.id} />)

	let addNewMessage = (values) => {
		sendMessage(values.newMessageText)
	}
	return (
		<div className={style.dialogs}>
			<div className={style.dialogs__messages}>
				{messagesElement}
				{smsElement}
				<AddMessageForm onSubmit={addNewMessage} />
			</div>
		</div>
	)
}

export default Dialogs