import Profile from './Profile';
import { addPost, getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus } from '../../state/profile-reducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getNewPostText, getPosts, getProfile, getStatus } from '../../selectors/profile-selectors';
import { getIsAuth, getUserId } from '../../selectors/auth-selectors';


let mapStateToProps = (state) => {
	return {
		profile: getProfile(state),
		status: getStatus(state),
		authorizedUserId: getUserId(state),
		isAuth: getIsAuth(state),
		newPostText: getNewPostText(state),
		posts: getPosts(state),
	}
}

export default compose(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile, addPost, }),
	withRouter,
	withAuthRedirect
)(Profile)