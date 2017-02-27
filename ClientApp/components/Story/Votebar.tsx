import * as React from 'react';
import { Link } from 'react-router';

export class Votebar extends React.Component<any, void> {
    public render() {

        return <div className='votebar'>
                    <div className='up-vote'>▲</div>
                    <div><span>10.5k</span></div>
                    <div className='down-vote'>▼</div>

                    <Link className='edit' to={'/story/edit/123'}>
                        ⚙
                    </Link>
                </div>;
    }
}