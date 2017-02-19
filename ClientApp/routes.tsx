import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Story } from './components/Story';
import { StoryView } from './components/StoryView';
import { StoryEdit } from './components/StoryEdit';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
    <Route path='/counter' components={{ body: Counter }} />
    <Route path='/fetchdata' components={{ body: FetchData }} />
    <Route path='/story' components={{ body: Story }}>
        <Route path='view/:storyID' components={{ body: StoryView }} />
        <Route path='edit/:storyID' components={{ body: StoryEdit}} />
    </Route>
</Route>;

// Allow Hot Module Reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
