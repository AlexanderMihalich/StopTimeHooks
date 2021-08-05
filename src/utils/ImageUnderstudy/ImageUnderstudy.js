import React from 'react'
import userPhoto from '../../assets/img/user2.png'

export const ImageUnderstudy = (photo) => {
	return (
		<img alt="" src={photo !== null ? photo : userPhoto} />
	)
}