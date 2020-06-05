import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addIssue,
  updateIssue,
  removeIssue,
  modalPush,
  modalPop,
  getIssue,
  postIssue,
  putIssue,
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
      updateIssue,
      removeIssue,
      getIssue,
      postIssue,
      putIssue,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
