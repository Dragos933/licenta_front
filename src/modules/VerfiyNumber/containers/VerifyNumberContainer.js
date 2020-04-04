import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VerifyNumber from '../components/index';

import {
  sendCode,
  registerError,
  unregisterError,
  verifyCode
} from '../../../redux/modules/VerifyNumber/actions';

import {
  selectErrors,
  selectStatus,
  selectVerified,
  selectEmailSent
} from '../../../redux/modules/VerifyNumber/selectors';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      sendCode,
      registerError,
      unregisterError,
      verifyCode
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  errors: selectErrors(state),
  status: selectStatus(state),
  isVerified: selectVerified(state),
  emailSent: selectEmailSent(state)
});

export default connect(mapStateToProps, mapActionToProps)(VerifyNumber);
