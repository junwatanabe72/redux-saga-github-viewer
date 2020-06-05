import { ADD_ISSUE, UPDATE_ISSUE, REMOVE_ISSUE } from '../actions/index';
// import { createDate } from '../utils/dataHelper';

const status = {
  open: 'Open',
  close: 'Close',
};

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
    case REMOVE_ISSUE: {
      for (let key in issue) {
        delete newData[key];
      }
      return {
        ...state,
        data: newData,
      };
    }
    //update作成
    case UPDATE_ISSUE: {
      newData[issue.id] = { ...issue };
      return { ...state, data: newData };
    }
    default: {
      return state;
    }
  }
}

// export default function IssueReducer(state = initialState, action) {
//   let { index, data } = state;
//   const { issue } = action.payload || {};
//   const newData = { ...data };
//   const id = index + 1;
//   switch (action.type) {
//     case ADD_ISSUE: {
//       newData[id] = { ...issue, id };
//       return { ...state, index: id, data: newData };
//     }
//     case REMOVE_ISSUE: {
//       for (let key in issue) {
//         delete newData[key];
//       }
//       return {
//         ...state,
//         data: newData,
//       };
//     }
//     //update作成
//     case UPDATE_ISSUE: {
//       newData[issue.id] = { ...issue };
//       return { ...state, data: newData };
//     }
//     default: {
//       return state;
//     }
//   }
// }
