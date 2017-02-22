import * as React from 'react';
import { Link } from 'react-router';

export interface ILayoutProps {
    body: React.ReactElement<any>;
}

export class Layout extends React.Component<ILayoutProps, void> {
    public render() {
        return <div className='layout'>
                   
                    <header className='site-header'>
                        <div className='logo'>
                            <span className="glyphicon glyphicon-bold"></span>
                        </div>
                        <div className='header-middle-area'>
                            <h3>
                                <Link to={'/'}>
                                    Storyline asd
                                </Link>
                            </h3>
                        </div>
                        <nav className='main-menu'>
                            <ul>
                                <li role="presentation"><Link className='btn btn-success' to={'/story/create'}>Create story</Link></li>
                                <li role="presentation"><a href="#">Login</a></li>
                            </ul>
                        </nav>
                        <div className='search-area'>
                            
                        </div>
                    </header>
                    
                    {this.props.body}
                </div>;
    }
}
