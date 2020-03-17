import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ForgotPassword from '../components/index';

import {} from '../../../redux/modules/Register/actions';

import {} from '../../../redux/modules/Register/selectors';

const mapActionToProps = (dispatch) => bindActionCreators({}, dispatch);

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapActionToProps)(ForgotPassword);
