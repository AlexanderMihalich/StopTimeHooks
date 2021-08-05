import React from 'react'
import backgroundImage from '../../assets/img/background.jpg'

const Background = () => {
	return (
		<div className="background">
			<img alt="" className="background__img" src={backgroundImage} />
		</div>
	)
}

export default Background
