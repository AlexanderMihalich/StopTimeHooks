import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { getInitialized } from './selectors/app-selectors';
import { initializeApp } from './state/app-reducer';
import { withSuspense } from './hoc/withSuspense';
import PreloaderApp from './components/common/PreloaderApp/PreloaderApp';
import HeaderContainer from './components/Header/HeaderContainer';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Error404 = React.lazy(() => import('./components/Error404/Error404'))
const Login = React.lazy(() => import('./components/Login/Login'))


const App = ({ initializeApp, initialized }) => {

	useEffect(() => {
		initializeApp()
	}, [initialized])

	if (!initialized) {
		return <PreloaderApp />
	}
	return (
		<HashRouter>
			<div className="wrapper">
				<HeaderContainer />
				<main className='page'>
					<Background />
					<div className='page__content _container'>
						<Switch>
							<Route exact path='/'
								render={() => <Redirect to='/profile' />} />
							<Route path='/profile/:userId?'
								render={withSuspense(ProfileContainer)} />
							<Route path='/dialogs'
								render={withSuspense(DialogsContainer)} />
							<Route path='/users'
								render={withSuspense(UsersContainer)} />
							<Route path='/login'
								render={withSuspense(Login)} />
							<Route path='*'
								render={withSuspense(Error404)} />
						</Switch>
						<Navbar />
					</div>
				</main>
			</div>
		</HashRouter >
	);
}

const mapStateToProps = (state) => ({
	initialized: getInitialized(state)
})
export default compose(connect(mapStateToProps, { initializeApp }))(App)
