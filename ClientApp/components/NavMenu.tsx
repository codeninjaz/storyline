import * as React from 'react';
import { Link } from 'react-router';

export class NavMenu extends React.Component<any, void> {
    public render() {
        return <div className='main-nav'>
            <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button
                        type='button'
                        className='navbar-toggle'
                        data-toggle='collapse'
                        data-target='.navbar-collapse'
                    >
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar' />
                        <span className='icon-bar' />
                        <span className='icon-bar' />
                    </button>
                    <Link className='navbar-brand' to={'/'}>storyline</Link>
                </div>
                <div className='clearfix' />
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <Link to={'/'} activeClassName='active'>
                                <span className='glyphicon glyphicon-home' /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'/counter'} activeClassName='active'>
                                <span className='glyphicon glyphicon-education' /> Counter
                            </Link>
                        </li>
                        <li>
                            <Link to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list' /> Fetch data
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
