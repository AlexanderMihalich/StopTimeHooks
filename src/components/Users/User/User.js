import React from 'react'
import '../Users.scss'
import { NavLink } from 'react-router-dom';
import { ImageUnderstudy } from '../../../utils/ImageUnderstudy/ImageUnderstudy';

const User = ({ user, followingInPropgress, unfollow, follow, userBackground }) => {

	return (
		<div className="user">
			<div className="user__background">
				<img alt="" src={userBackground.img} />
			</div>
			<div className="user__card">
				<div className='user__ava'>
					<NavLink to={'/profile/' + user.id}>
						{ImageUnderstudy(user.photos.small)}
					</NavLink>
				</div>
				<div className='user__items'>
					<div className='user__item'>
						<h3 className='user__name'>{user.name}</h3>
						<div className='user__text'>{user.status !== null ? user.status : "no status"}</div>
					</div>
					<div className='user__btns'>
						{user.followed
							? <button className='user__btn user__btn_red'
								disabled={followingInPropgress.some(id => id === user.id)}
								onClick={() => { unfollow(user.id) }}>Unfollow</button>
							: <button className='user__btn'
								disabled={followingInPropgress.some(id => id === user.id)}
								onClick={() => { follow(user.id) }}>Follow</button>
						}
					</div>
				</div>
			</div>
		</div>
	)
}
export default User