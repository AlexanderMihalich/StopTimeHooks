import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { getIsAuth } from '../selectors/auth-selectors'

let mapStateToPropsRedirect = (state) => ({
	isAuth: getIsAuth(state)
})

export const withAuthRedirect = (Component) => {

	const RedirectComponent = ({ isAuth, ...props }) => {
		if (!isAuth) return <Redirect to={'/login'} />
		return <Component {...props} />
	}

	return connect(mapStateToPropsRedirect)(RedirectComponent)
}