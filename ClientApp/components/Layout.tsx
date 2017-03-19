import * as React from 'react';
import { Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Login } from './Login/Login';

export interface ILayoutProps {
    body: React.ReactElement<any>;
}

@inject('storylineStore')
@observer
export class Layout extends React.Component<ILayoutProps, void> {
    handleLoginClick() {
        this.props.storylineStore.loginVisible = true;
    }

    handleLogoutClick() {
        this.props.storylineStore.loggedInUser = null;
    }    

    public render() {
        let loginView = null
        if(this.props.storylineStore.loginVisible) {
            loginView = <Login />
        }

        let loginout = null;
        if(this.props.storylineStore.loggedInUser) {
            loginout = <li onClick={() => this.handleLogoutClick()}>Logout {this.props.storylineStore.loggedInUser.username}</li>
        } else {
            loginout = <li onClick={() => this.handleLoginClick()}>Login</li>
        }

        let loadingBar = null;
        if(this.props.storylineStore.isLoading) {
            loadingBar = <div className='loading-bar' data-percentage={this.props.storylineStore.loadingPercentage}></div>;
        }

        return <div className='layout'>

            <header className='site-header'>
                <div className='header-width'>
                    <div className='logo'>
                        °□°
                    </div>                    
                    <div className='header-middle-area'>
                        <Link to={'/'}>
                            Storyline
                                </Link>
                    </div>
                    <nav className='main-menu'>
                        <ul>
                            <li><Link to={'/story/create'}>Create story</Link></li>
                            {loginout}
                        </ul>
                    </nav>
                </div>
            </header>
            {loadingBar}
            {loginView}
            {this.props.body}
        </div>;
    }
}
