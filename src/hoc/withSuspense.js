import React from 'react'

export const withSuspense = (Component) => {

	return () => (
		<React.Suspense fallback={<div>Loading ...</div>}>
			<Component />
		</React.Suspense>
	)
}