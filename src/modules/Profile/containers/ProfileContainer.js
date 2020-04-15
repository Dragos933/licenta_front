import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from '../components/index';

import {} from '../../../redux/modules/ForgotPassword/actions';

import {} from '../../../redux/modules/ForgotPassword/selectors';

const mapActionToProps = (dispatch) => bindActionCreators({}, dispatch);

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapActionToProps)(Profile);
