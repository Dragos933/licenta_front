import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from '../components/index';

import {
  setField,
  registerError,
  unregisterError,
  register,
  createTree,
  resetFields,
  sendEmail
} from '../../../redux/modules/Register/actions';

import {
  selectRegister,
  selectErrors,
  selectHasRegisterd
} from '../../../redux/modules/Register/selectors';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      setField,
      registerError,
      unregisterError,
      register,
      createTree,
      resetFields,
      sendEmail
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  registerData: selectRegister(state),
  errors: selectErrors(state),
  hasRegistered: selectHasRegisterd(state)
});

export default connect(mapStateToProps, mapActionToProps)(Register);
