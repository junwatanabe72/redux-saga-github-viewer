import { ADD_USER } from '../actions/index';

const initialState = {
  name: '',
  email: '',
  profileUrl: '',
};

export default function UserReducer(state = initialState, action) {
  const { data } = action.payload || {};
  switch (action.type) {
    case ADD_USER: {
      console.log(data);
      state = { ...state, name: data.login, email: data.email, profileUrl: data.avatar_url };
      return state;
    }
    default: {
      return state;
    }
  }
}
