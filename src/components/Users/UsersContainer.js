import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { followSuccess, setCurrentPage, unfollowSuccess, toogleFolowingProgress, requestUsers, follow, unfollow } from '../../state/users-reducer'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalItemsCount, getUserBackground, getUsers } from '../../selectors/users-selectors';

const UsersContainer = ({ setCurrentPage, getUsers, isFetching, usersPage, totalItemsCount, pageSize, currentPage, follow, unfollow, followingInPropgress, userBackground }) => {

	useEffect(() => {
		getUsers(currentPage, pageSize)
	}, [])

	let onPageChanched = (pageNumber) => {
		setCurrentPage(pageNumber, pageSize)
		getUsers(pageNumber, pageSize)
	}

	return <div className='block block_m'>
		{isFetching ? <Preloader /> : null}
		< Users
			usersPage={usersPage}
			totalItemsCount={totalItemsCount}
			pageSize={pageSize}
			currentPage={currentPage}
			onPageChanched={onPageChanched}
			follow={follow}
			unfollow={unfollow}
			followingInPropgress={followingInPropgress}
			userBackground={userBackground}
		/>
	</div>
}

let mapStateToProps = (state) => {
	return {
		usersPage: getUsers(state),
		pageSize: getPageSize(state),
		totalItemsCount: getTotalItemsCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInPropgress: getFollowingInProgress(state),
		userBackground: getUserBackground(state),
	}
}
export default compose(
	connect(mapStateToProps,
		{
			followSuccess, unfollowSuccess, setCurrentPage, toogleFolowingProgress,
			getUsers: requestUsers, follow, unfollow
		}),
)(UsersContainer)