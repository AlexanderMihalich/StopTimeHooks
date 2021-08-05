import React from 'react'
import style from '../AddPost.module.scss'

const MyPosts = ({ img, message }) => {
	return (
		<div className={style.posts__item}>
			<div className={style.posts__ava}>
				<img alt="" src={img} />
			</div>
			<p className={style.posts__text}>
				{message}
			</p>
		</div>
	)
}
export default MyPosts