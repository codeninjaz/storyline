import * as React from 'react';
import { Link } from 'react-router';

export interface ILayoutProps {
    body: React.ReactElement<any>;
}

export class Layout extends React.Component<ILayoutProps, void> {
    public render() {
        return <div className='container'>
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills pull-right">
                        <li role="presentation"><Link className='btn btn-success' to={'/story/create'}>Create story</Link></li>
                        <li role="presentation"><a href="#">Login</a></li>
                    </ul>
                </nav>
                <h3 className="text-muted">
                    <Link to={'/'}>
                        Story!
                            </Link>
                </h3>
            </div>

            <div className='row'>
                <div className='col-sm-12'>
                    {this.props.body}
                </div>
            </div>
        </div>;
    }
}
