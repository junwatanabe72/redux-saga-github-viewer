import { ADD_ISSUE } from '../actions/index';

const initialState = {
  index: 0,
  data: {},
};

export default function IssueReducer(state = initialState, action) {
  let { data } = state;
  const { issue } = action.payload || {};
  const newData = { ...data };

  switch (action.type) {
    case ADD_ISSUE: {
      for (let key in issue) {
        const id = issue[key].id;
        newData[id] = issue[key];
      }
      state = { data: newData };
      return state;
    }
    default: {
      return state;
    }
  }
}
