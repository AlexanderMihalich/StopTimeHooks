import React from 'react'
import './Users.scss'
import User from './User/User'
import Pagination from '../common/Pagination/Pagination'

const Users = ({ usersPage, followingInPropgress, unfollow, follow, totalItemsCount, pageSize, currentPage, onPageChanched, userBackground }) => {

	return (
		<div className='users'>
			<div className='users__body'>
				{usersPage.map((u, i) => <User key={u.id} user={u} followingInPropgress={followingInPropgress} unfollow={unfollow} follow={follow} userBackground={userBackground[i % userBackground.length]} />)}
				<Pagination totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage} onPageChanched={onPageChanched} />
			</div>
		</div >
	)
}
export default Users