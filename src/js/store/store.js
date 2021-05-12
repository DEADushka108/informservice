import reducer from './reducer';
import {redirect} from './redirect/redirect';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(redirect)
    )
);

export default store;
