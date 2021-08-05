import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import cn from 'classnames';

const Navbar = () => {

	let [isActive, setIsActive] = useState(false)

	const clickActive = () => {
		setIsActive(!isActive)
	}

	return (
		<>
			<nav className={isActive === true ? cn("nav", "_active") : "nav"}>
				<ul className="nav__list">
					<li><NavLink to={'/profile'} activeClassName="nav_active">Profile</NavLink></li>
					<li><NavLink to={'/dialogs'} activeClassName="nav_active">Messages</NavLink></li>
					<li><NavLink to={'/users'} activeClassName="nav_active">Users</NavLink></li>
					<li><NavLink to={'/_'} activeClassName="nav_active">Example Error</NavLink></li>
				</ul>
			</nav>
			<div className={isActive === true ? cn("nav__array", "_active") : "nav__array"}>
				<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="#664796" onClick={clickActive}>
					<path className="cls-1" d="M82.28,140.5A5,5,0,0,1,78.75,132l32.18-32.19L78.75,67.59a5,5,0,0,1,7.07-7.07l35.72,35.73a5,5,0,0,1,0,7.07L85.82,139A5,5,0,0,1,82.28,140.5Z" />
					<path className="cls-1" d="M154.15,175.69H45.85a21.57,21.57,0,0,1-21.54-21.54V45.85A21.57,21.57,0,0,1,45.85,24.31h108.3a21.57,21.57,0,0,1,21.54,21.54v108.3A21.57,21.57,0,0,1,154.15,175.69ZM45.85,34.31A11.56,11.56,0,0,0,34.31,45.85v108.3a11.56,11.56,0,0,0,11.54,11.54h108.3a11.56,11.56,0,0,0,11.54-11.54V45.85a11.56,11.56,0,0,0-11.54-11.54Z" />
				</svg>
			</div>
		</>
	)
}

export default Navbar
