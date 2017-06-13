import Auth from '../components/Auth';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

const AuthContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth));

export default AuthContainer;