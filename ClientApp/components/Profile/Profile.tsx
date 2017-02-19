import * as React from 'react';

export interface IProfileProps {
    body: React.ReactElement<any>;
}

export class Profile extends React.Component<IProfileProps, void> {
    public render() {
        return <div>
            {this.props.body}
        </div>;
    }
}
