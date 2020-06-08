import { ADD_USER } from '../actions/index';

export default function UserReducer(state = {}, action) {
  const { data } = action.payload || {};
  switch (action.type) {
    case ADD_USER: {
      state = { ...data };
      return state;
    }
    default: {
      return state;
    }
  }
}
