import * as React from 'react';
import Transition from 'react-motion-ui-pack';

interface ITestAnimationState {
    items: [string];
}

export class AnimationTest extends React.Component<any, ITestAnimationState> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [''],
        };
    }
    public render() {
        return (
            <ul>
                {/*{this.state.items.map((item, index) => (<li key={`testitem-${index}`}>{}</li>))}*/}
                <li>Hej</li>
            </ul>
        );
    }

    private componentDidMount() {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const newArray = this.state.items;
                newArray.push(`nummer:${i}`);
                this.setState(
                    { items: newArray },
                );
            }, 1000);
        }
    }
}
