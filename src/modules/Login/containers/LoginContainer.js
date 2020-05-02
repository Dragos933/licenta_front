import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/index';

import { setField, login } from '../../../redux/modules/Login/actions';

import {
  selectEmail,
  selectPassword,
  selectApiStatus,
  selectHasSubmitted,
  selectErrors
} from '../../../redux/modules/Login/selectors';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      setField,
      login
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  email: selectEmail(state),
  password: selectPassword(state),
  apiStatus: selectApiStatus(state),
  hasSubmitted: selectHasSubmitted(state),
  errors: selectErrors(state)
});

export default connect(mapStateToProps, mapActionToProps)(Login);
