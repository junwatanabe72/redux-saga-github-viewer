import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addIssue,
  modalPush,
  modalPop,
  getIssue,
  postIssue,
  putIssue,
  getUser,
} from '../actions/index';
import Issue from '../components/organisms/Issue';

function mapStateToProps(state) {
  return {
    data: state.IssueR.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      modalPush,
      modalPop,
      addIssue,
      getIssue,
      postIssue,
      putIssue,
      getUser,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
