import React, { useEffect } from 'react';
import Description from './Description/Description';
import AddPost from './AddPost/AddPost';

const Profile = ({ profile, authorizedUserId, getUserProfile, getUserStatus, savePhoto, saveProfile, status, updateUserStatus, newPostText, posts, addPost, match }) => {

	let isOwner = !match.params.userId

	let refreshProfile = () => {
		let userId = match.params.userId
		if (!userId) {
			userId = authorizedUserId;
		}
		getUserProfile(userId)
		getUserStatus(userId)
	}

	useEffect(() => {
		refreshProfile()
		return refreshProfile()
	}, [isOwner])

	return (
		<div className="block">
			<Description profile={profile} isOwner={isOwner} savePhoto={savePhoto} saveProfile={saveProfile} status={status} updateStatus={updateUserStatus} />
			<AddPost profile={profile} newPostText={newPostText} posts={posts} addPost={addPost} />
		</div>
	)
}
export default Profile