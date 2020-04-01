import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ForgotPassword from '../components/index';

import { sendEmail } from '../../../redux/modules/ForgotPassword/actions';

import {} from '../../../redux/modules/ForgotPassword/selectors';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      sendEmail
    },
    dispatch
  );

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapActionToProps)(ForgotPassword);
