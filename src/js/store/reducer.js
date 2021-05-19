import {combineReducers} from 'redux';
import {reducer as users} from './users/users';
import {reducer as route} from './route/route';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.USERS]: users,
  [NameSpace.ROUTE]: route,
});
