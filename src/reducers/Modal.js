import { MODAL_PUSH, MODAL_POP } from '../actions/index';

const initialState = {
  show: false,
  component: [],
};

export default function ModalReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_PUSH:
      return {
        ...state,
        component: [...state.component, action.payload.argComponent],
        show: true,
      };
    case MODAL_POP:
      return {
        ...state,
        component: state.component.slice(0, -1),
        show: false,
      };
    default:
      return state;
  }
}
