import * as React from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';

interface ITestAnimationState {
    items: string[];
    num: number;
}

export class AnimationTest extends React.Component<any, ITestAnimationState> {

    private interval: any;
    constructor(props: any) {
        super(props);
        this.state = {
            items: [],
            num: 0,
        };
        this.interval = {};
    }

    public componentDidMount() {
        this.resetStuff();
    }

    public componentWillUnmount() {
        clearInterval(this.interval);
    }
    public render() {
        return (<div style={{ overflow: 'hidden' }}>
            <Transition
                style={{ listStyle: 'lower-latin inside' }}
                component={'ul'}
                enter={{ opacity: 1, translateX: spring(0, { stiffness: 500, damping: 20 }) }}
                leave={{ opacity: 0, translateX: 250 }}
            >
                {this.state.items.map((item, index) => (<li key={`testitem-${index}`} style={{ fontSize: '0.8rem' }} >{item}</li>))}
            </Transition>
        </div>);
    }

    private resetStuff() {
        clearInterval(this.interval);
        this.setState(
            { items: [], num: 0 },
        );
        this.iterate();
    }

    private iterate() {
        this.interval = setInterval(() => {
            this.setState(
                {
                    items: this.state.items.concat([`nummer:${this.state.num}`]),
                    num: this.state.num += 1,
                },
            );
            if (this.state.num > 20) { this.resetStuff(); }
        }, 300);
    }
}
