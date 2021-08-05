import React from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import cn from 'classnames';

const Header = ({ isAuth, login, logout }) => {

	return (
		<header className={style.header}>
			<div className={cn(style.header__content, "_container")}>
				<div className={style.header__logo} >
					<div className={style.header__stop}>
						St<span><img alt="" src={logo} className={style.header__img} />p</span>
					</div>
					<sub>time</sub>
				</div>
				<div className={style.header__login}>
					{isAuth
						? <div className={style.header__rowUser}><span className={style.header__user}> {login}</span> <button onClick={logout} className={style.header__btn}>Log out</button> </div>
						: <NavLink to={'/login'} >Login</NavLink>}
				</div>
			</div>
		</header>
	)
}

export default Header