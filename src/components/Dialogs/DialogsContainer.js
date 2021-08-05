import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { getDialogs, getMessage, getNewMessage } from '../../selectors/dialogs-selectors'
import { sendMessage } from '../../state/dialogs-reducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
	return {
		dialogs: getDialogs(state),
		messages: getMessage(state),
		newMessage: getNewMessage(state),
	}
}

export default compose(
	connect(mapStateToProps, { sendMessage, }),
	withAuthRedirect
)(Dialogs)