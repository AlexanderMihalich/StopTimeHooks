export const getDialogs = (state) => {
	return state.messagesPage.dialogs
}
export const getMessage = (state) => {
	return state.messagesPage.messages
}
export const getNewMessage = (state) => {
	return state.messagesPage.newMessage
}
export const getNewMessageText = (state) => {
	return state.messagesPage.newMessageText
}