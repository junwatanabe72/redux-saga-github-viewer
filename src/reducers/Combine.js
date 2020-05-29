import { combineReducers } from 'redux';
import IssueR from './Issue';
import ModalR from './Modal';
import UserR from './User';

const rootReducer = combineReducers({ IssueR, ModalR, UserR });

export default rootReducer;
