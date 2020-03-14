import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from '../components/index';

import { 
  setField,
  registerError,
 } from '../../../redux/modules/Register/actions';

import {
  selectRegister,
  selectErrors,
} from '../../../redux/modules/Register/selectors';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      setField,
      registerError
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  registerData: selectRegister(state),
  errors: selectErrors(state),
});

export default connect(mapStateToProps, mapActionToProps)(Register);
