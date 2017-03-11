import './css/site.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { StorylineStore } from './components/Stores/StorylineStore';
import { UserStore } from './components/Stores/UserStore';
import { TransportLayer } from './components/TransportLayer';

const routingStore = new RouterStore();
let transportLayer = new TransportLayer(true);
const store = new StorylineStore(transportLayer, new UserStore(transportLayer));

const stores = {
    // Key can be whatever you want
    routing: routingStore,
    storylineStore: store,
};

ReactDOM.render(
    <Provider {...stores}>
        <Router history={browserHistory} children={routes} />
    </Provider>,
    document.getElementById('react-app'),
);
