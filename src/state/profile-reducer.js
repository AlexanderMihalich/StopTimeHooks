import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/api';

let ADD_POST = 'profile-reducer/ADD-POST'
let SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE'
let SET_USER_STATUS = 'profile-reducer/SET_USER_STATUS'
let SAVE_PHOTO_SUCCESS = 'profile-reducer/SAVE_PHOTO_SUCCESS'

let initialState = {
	posts: [
		{ id: 1, img: 'https://www.soyuz.ru/public/uploads/files/2/7452690/20201216105432aed6fa04c9.jpg', message: "It's our new program! Hey!", },
		{ id: 2, img: 'https://cdnimg.rg.ru/i/gallery/3f26d604/3ad23133.jpg', message: "Hey, why nobody love my?", },
	],
	profile: null,
	status: '',
	photos: '',
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 3,
				img: 'https://www.soyuz.ru/public/uploads/files/2/7452690/20201216105432aed6fa04c9.jpg',
				message: action.newPostText,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			}
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }
		case SET_USER_STATUS:
			return { ...state, status: action.status }
		case SAVE_PHOTO_SUCCESS:
			return {
				...state, profile: { ...state.profile, photos: action.photos }
			}
		default:
			return state
	}
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
	const responce = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(responce.data))
}
export const getUserStatus = (userId) => async (dispatch) => {
	const responce = await profileAPI.getStatus(userId)
	dispatch(setUserStatus(responce.data))
}
export const updateUserStatus = (status) => async (dispatch) => {
	const responce = await profileAPI.updateStatus(status)
	if (!responce.data.resultCode) {
		dispatch(setUserStatus(status))
	}
}
export const savePhoto = (file) => async (dispatch) => {
	const responce = await profileAPI.savePhoto(file)
	if (!responce.data.resultCode) {
		dispatch(savePhotoSuccess(responce.data.data.photos))
	}
}
export const saveProfile = (data) => async (dispatch, getState) => {
	const userId = getState().auth.userId
	const responce = await profileAPI.saveProfile(data)
	if (!responce.data.resultCode) {
		dispatch(getUserProfile(userId))
	} else {
		dispatch(stopSubmit("edit-profile", { _error: responce.data.messages[0] }))
		return Promise.reject(responce.data.messages[0])
	}
}

export default profileReducer