import * as React from 'react';
import { Link } from 'react-router';

export class Create extends React.Component<any, void> {
    public render() {
        return <div className='create-story'>
                <div>
                    Antal delar <input type='number' defaultValue='3'/>
                    Delar aktiva i timmar <input type='number' defaultValue='36'/>
                </div>
                <h1 contentEditable>Name your story</h1>

                <textarea/>   

                <div>
                    <button className='btn btn-default'>Cancel</button>
                    <button className='btn btn-default'>Ok</button>
                </div>                                             
        </div>;
    }
}
