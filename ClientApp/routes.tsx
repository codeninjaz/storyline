import * as React from 'react';
import { HistoryBase, Route, Router } from 'react-router';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { Profile } from './components/Profile/Profile';
import { Edit as ProfileEdit } from './components/Profile/Edit';
import { View as ProfileView } from './components/Profile/View';
import { Story } from './components/Story/Story';
import { Create as StoryCreate } from './components/Story/Create';
import { Edit as StoryEdit } from './components/Story/Edit';
import { View as StoryView } from './components/Story/View';


export default <Route component={Layout}>
    <Route path='/' components={{ body: Home }} />
    <Route path='/story' components={{ body: Story }}>
        <Route path='view/:storyID' components={{ body: StoryView }} />
        <Route path='edit/:storyID' components={{ body: StoryEdit }} />
    </Route>
    <Route path='/story/create' components={{ body: StoryCreate }} />
    <Route path='/profile' components={{ body: Profile }}>
        <Route path='view/:userID' components={{ body: ProfileView }} />
        <Route path='edit/:userID' components={{ body: ProfileEdit }} />
    </Route>
</Route>;

// Allow Hot Module Reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
