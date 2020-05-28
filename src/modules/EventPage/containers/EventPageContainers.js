import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventPage from '../components/index';

import {  } from '../../../redux/modules/EventPage/actions';

import {

} from '../../../redux/modules/EventPage/selectors';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
    },
    dispatch
  );

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapActionToProps)(EventPage);
