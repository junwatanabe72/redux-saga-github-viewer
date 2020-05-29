// Issue Action Type:
export const ADD_ISSUE = 'ADD_ISSUE';
export const UPDATE_ISSUE = 'UPDATE_ISSUE';
export const REMOVE_ISSUE = 'REMOVE_ISSUE';

// Modal Action Type:
export const MODAL_PUSH = 'MODAL_PUSH';
export const MODAL_POP = 'MODAL_POP';

// Issue Action Creators:
export function addIssue(issue) {
  return { type: ADD_ISSUE, payload: { issue } };
}
export function updateIssue(issue) {
  return { type: UPDATE_ISSUE, payload: { issue } };
}
export function removeIssue(issue) {
  return { type: REMOVE_ISSUE, payload: { issue } };
}

// Modal Action Creators:
export function modalPush(argComponent) {
  return { type: MODAL_PUSH, payload: { argComponent } };
}
export function modalPop() {
  return { type: MODAL_POP, payload: {} };
}
