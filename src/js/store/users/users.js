import {extend} from '../../utils/utils';
import {users} from '../../mocks/users';

const initialState = {
  users,
};

const ActionType = {
  UPDATE_USERS: `UPDATE_USERS`,
};

const ActionCreator = {
  updateUsers: (usersList) => ({
    type: ActionType.UPDATE_USERS,
    payload: usersList,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_USERS:
      return extend(state, {
        users: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
