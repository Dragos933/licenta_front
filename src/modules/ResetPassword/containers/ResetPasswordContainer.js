import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResetPassword from '../components/index';

import {} from '../../../redux/modules/ResetPassword/actions';

import {} from '../../../redux/modules/ResetPassword/selectors';

const mapActionToProps = (dispatch) => bindActionCreators({}, dispatch);

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapActionToProps)(ResetPassword);
