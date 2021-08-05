import { connect } from 'react-redux';
import { compose } from 'redux';
import { getNewMessageText } from '../../../selectors/dialogs-selectors';
import Messages from './Messages';

let mapStateToProps = (state) => {
	return {
		newMessageText: getNewMessageText(state),
	}
}
export default compose(connect(mapStateToProps, {}))(Messages)
