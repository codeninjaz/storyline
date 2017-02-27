import * as React from 'react';
import { Link } from 'react-router';

export interface ILayoutProps {
    body: React.ReactElement<any>;
}

export class Layout extends React.Component<ILayoutProps, void> {
    public render() {
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
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/lab/animation'}>Test animation</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {this.props.body}
        </div>;
    }
}
