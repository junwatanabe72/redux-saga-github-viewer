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
      // console.log(issue);
      for (let key in issue) {
        newData[key] = issue[key];
      }
      state = { data: newData };
      return state;
    }
    default: {
      return state;
    }
  }
}
