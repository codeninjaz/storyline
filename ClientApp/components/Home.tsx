import * as React from 'react';
import {InList} from './Story/InList'

export class Home extends React.Component<any, void> {
    public render() {
        return <div className='story-width'>
                <InList type='text'/>
                <InList type='text'/>
                <InList type='text'/>
                <InList type='text'/>
                <InList type='text'/>
                <InList type='text'/>
                <InList type='text'/>
                <InList type='text'/>
                <InList type='text'/>
        </div>;
    }
}
