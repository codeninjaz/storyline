import { browserHistory  } from 'react-router';

export function IsAuthenticated (store, callback) {
    if(store.loggedInUser) {
        callback(true);
    } else {
        callback(false);
        store.loginVisible = true;
    }
}