import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Story } from './components/Story/Story';
import { View as StoryView} from './components/Story/View';
import { Edit as StoryEdit} from './components/Story/Edit';
import { Profile } from './components/Profile/Profile'; 
import { View as ProfileView} from './components/Profile/View'; 
import { Edit as ProfileEdit} from './components/Profile/Edit'; 

export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
    <Route path='/story' components={{ body: Story }}>
        <Route path='view/:storyID' components={{ body: StoryView }} />
        <Route path='edit/:storyID' components={{ body: StoryEdit}} />
    </Route>
    <Route path='/profile' components={{ body: Profile }}>
        <Route path='view/:userID' components={{ body: ProfileView }} />
        <Route path='edit/:userID' components={{ body: ProfileEdit}} />
    </Route>        
</Route>;

// Allow Hot Module Reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
