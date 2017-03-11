export class Security {
    static IsAuthenticated (store, callback) {
        if(store.loggedInUser) {
            callback(true);
        } else {
            callback(false);
            store.loginVisible = true;
        }
    }

    static IsInRole (store, role, callback) {
        if(store.loggedInUser) {
            if(store.loggedInUser.roles.indexOf(role) !== -1) {
                callback(true);
            } else {
                callback(false);
                store.loginVisible = true;
            }            
        } else {
            callback(false);
            store.loginVisible = true;
        }
    }    
}