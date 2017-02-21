import './css/site.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { StorylineStore } from './components/Stores/storylineStore';

const routingStore = new RouterStore();
const store = new StorylineStore();

const stores = {
    // Key can be whatever you want
    routing: routingStore,
    storylineStore: store
};

ReactDOM.render(
    <Provider {...stores}>
        <Router history={browserHistory} children={routes} />
    </Provider>,
    document.getElementById('react-app'),
);
