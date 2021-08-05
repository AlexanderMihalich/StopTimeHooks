import React from 'react'
import style from './Error404.module.scss'
import cn from 'classnames';

const Error404 = () => {
	return (
		<div className={cn(style.error, "block")}>
			<div className={cn(style.content, "_container")}>
				<h1 className={style.error__title}>404</h1>
				<br /><br />
				<span className={style.error__info}>File not found</span>
			</div>
		</div >
	)
}
export default Error404