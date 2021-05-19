import {extend} from '../../utils/utils';

const initialState = {
  route: [],
};

const ActionType = {
  CREATE_ROUTE: `CREATE_ROUTE`,
};

const ActionCreator = {
  createRoute: (route) => ({
    type: ActionType.CREATE_ROUTE,
    payload: route,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CREATE_ROUTE:
      return extend(state, {
        route: [action.payload, ...state.route]
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
