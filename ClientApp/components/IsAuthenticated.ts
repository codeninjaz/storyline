import { browserHistory  } from 'react-router';

export function IsAuthenticated (store) {
    if(!store.loggedInUser) {
        browserHistory.push('/');
        store.loginVisible = true;
    }
}