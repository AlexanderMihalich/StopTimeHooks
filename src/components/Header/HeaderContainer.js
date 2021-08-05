import { connect } from 'react-redux';
import Header from './Header';
import { compose } from 'redux';
import { logout } from '../../state/auth-reducer';
import { getIsAuth, getLogin } from '../../selectors/auth-selectors';

let mapStateToProps = (state) => {
	return {
		isAuth: getIsAuth(state),
		login: getLogin(state)
	}
}
export default compose(connect(mapStateToProps, { logout }))(Header)