import React, { useState } from 'react'
import './Pagination.scss'
import cn from 'classnames';

let Pagination = ({ totalItemsCount, pageSize, currentPage, onPageChanched, portionSize = 8 }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize)

	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize

	return (
		<ul className="pagination">
			{portionNumber > 1 &&
				<span onClick={() => { setPortionNumber(portionNumber - 1) }} className="pagination__arrow pagination__arrow_1">
					<svg className="arrowIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
						<g fill="none" stroke="#4C43AA" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
							<circle className="arrowIconCircle" cx="16" cy="16" r="15.12"></circle>
							<path className="arrowIcon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
						</g>
					</svg>
				</span>}
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map((p) => {
					return <li className={cn({ "pagination__item_active": currentPage === p }, "pagination__item")}
						key={p} onClick={(e) => { onPageChanched(p) }}> {p}</li>
				})
			}
			{portionCount > portionNumber &&
				<span onClick={() => { setPortionNumber(portionNumber + 1) }} className="pagination__arrow">
					<svg className="arrowIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
						<g fill="none" stroke="#4C43AA" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
							<circle className="arrowIconCircle" cx="16" cy="16" r="15.12"></circle>
							<path className="arrowIcon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
						</g>
					</svg>
				</span>}
		</ul>
	)
}

export default Pagination