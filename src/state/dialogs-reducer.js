let SEND_MESSAGE = 'dialogs-reducer/SEND-MESSAGE'

let initialState = {
	dialogs: [
		{ id: 1, user: 'Stiven', avatar: 'https://debaty.sumy.ua/wp-content/uploads/2019/01/9_main_new.1506602508.jpg', },
		{ id: 2, user: 'Victor', avatar: 'https://www.soyuz.ru/public/uploads/files/2/7452690/20201216105432aed6fa04c9.jpg', },
		{ id: 3, user: 'Makar', avatar: 'https://www.mirf.ru/wp-content/uploads/2021/03/avatar-scaled-2560.jpg', },
		{ id: 4, user: 'Irma', avatar: 'https://sahiwal.tv/wp-content/uploads/2020/06/af4471294d3829d55ac2bedd3b91f4670206ef7d.png', },
		{ id: 5, user: 'Sveta', avatar: 'https://cdnimg.rg.ru/i/gallery/3f26d604/3ad23133.jpg', },
		{ id: 6, user: 'Valera', avatar: 'https://www.mirf.ru/wp-content/uploads/2021/03/mv5bmjixnti1mta0m15bml5banbnxkftztcwnzc3mtuzna._v1_sx1777_cr001777999_al_.jpg', },
	],
	messages: [
		{ id: 1, message: 'Hi!', },
		{ id: 2, message: 'How is your study?', },
		{ id: 3, message: 'Yo', },
		{ id: 4, message: 'What Sapp', },
		{ id: 5, message: 'How are you', },
		{ id: 6, message: 'Welcome!', },
	],
	newMessage: [
		{ id: 1, sms: 'It\'s new sms!', },
	],
	newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				newMessage: [...state.newMessage, { id: 2, sms: action.newMessageText, }],
				newMessageText: ''
			}
		default:
			return state
	}
}

export const sendMessage = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })

export default dialogsReducer
