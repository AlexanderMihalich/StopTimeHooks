export const getIsAuth = (state) => {
	return state.auth.isAuth
}
export const getLogin = (state) => {
	return state.auth.login
}
export const getCaptchaUrlState = (state) => {
	return state.auth.captchaUrl
}
export const getUserId = (state) => {
	return state.auth.userId
}