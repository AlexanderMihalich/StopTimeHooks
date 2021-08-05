import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';
import img1 from '../assets/img/user/1.jpg'
import img2 from '../assets/img/user/2.jpg'
import img3 from '../assets/img/user/3.jpg'
import img4 from '../assets/img/user/4.jpg'
import img5 from '../assets/img/user/5.jpg'
import img6 from '../assets/img/user/6.jpg'
import img7 from '../assets/img/user/7.jpg'
import img8 from '../assets/img/user/8.jpg'
import img9 from '../assets/img/user/9.jpg'

let FOLLOW = 'users-reducer/FOLLOW'
let UNFOLLOW = 'users-reducer/UNFOLLOW'
let SET_USERS = 'users-reducer/SET_USERS'
let SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE'
let SET_USERS_TOTAL_COUNT = 'users-reducer/SET_USERS_TOTAL_COUNT'
let TOGGLE_IS_FETCHING = 'users-reducer/TOGGLE_IS_FETCHING'
let TOGGLE_IS_FOLLOWING_PROGRESS = 'users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
	users: [],
	pageSize: 10,
	totalItemsCount: 0,
	currentPage: 2,
	isFetching: true,
	followingInPropgress: [],
	userBackground: [
		{ img: img1 },
		{ img: img2 },
		{ img: img3 },
		{ img: img4 },
		{ img: img5 },
		{ img: img6 },
		{ img: img7 },
		{ img: img8 },
		{ img: img9 },
	]
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
			}
		case SET_USERS:
			return { ...state, users: action.users }
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }
		case SET_USERS_TOTAL_COUNT:
			return { ...state, totalItemsCount: action.count }
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state, followingInPropgress: action.isFetching
					? [...state.followingInPropgress, action.userId]
					: state.followingInPropgress.filter(id => id !== action.userId)
			}
		default:
			return state
	}
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setItemsTotalCount = (totalItemsCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalItemsCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toogleFolowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true))
	const data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(toggleIsFetching(false))
	dispatch(setUsers(data.items))
	dispatch(setItemsTotalCount(data.totalCount))
}
const followUnfollow = async (dispatch, userId, aipMethod, actionCreator) => {
	dispatch(toogleFolowingProgress(true, userId))
	const data = await aipMethod(userId)
	if (!data.resultCode) {
		dispatch(actionCreator(userId))
	}
	dispatch(toogleFolowingProgress(false, userId))
}
export const unfollow = (userId) => async (dispatch) => {
	followUnfollow(dispatch, userId, usersAPI.buttonUnfollow.bind(usersAPI), unfollowSuccess)
}
export const follow = (userId) => async (dispatch) => {
	followUnfollow(dispatch, userId, usersAPI.buttonFollow.bind(usersAPI), followSuccess)
}

export default usersReducer