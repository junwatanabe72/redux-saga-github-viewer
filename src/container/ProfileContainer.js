import { connect } from 'react-redux';
import Profile from '../components/organisms/Profile';
const mapStateToProps = (state) => {
  return {
    userData: state.UserR,
  };
};

export default connect(mapStateToProps)(Profile);
