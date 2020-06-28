import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from '../actions/index';
import Profile from '../components/organisms/Profile';
const mapStateToProps = (state) => {
  return {
    userData: state.UserR,
  };
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUser,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
