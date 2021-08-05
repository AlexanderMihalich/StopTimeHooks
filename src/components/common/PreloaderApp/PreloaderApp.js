import React from 'react'
import preloader from '../../../assets/img/loader.svg'
import './PreloaderApp.scss'

const PreloaderApp = () => {
	return (
		<div className='preloaderApp'>
			<img alt="" src={preloader} />
		</div>
	)
}

export default PreloaderApp