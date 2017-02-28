import * as React from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';
import Blob from './Blob';

interface ITestAnimationState {
    items: string[];
    num: number;
}

export class AnimationTest extends React.Component<any, ITestAnimationState> {

    private interval: any = null;
    private timerOn: boolean = false;
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
        this.cancelRows();
    }

    public render() {
        return (<div style={{ overflow: 'hidden' }}>
            <Blob />
            <button onClick={this.cancelRows.bind(this)}>Stoppa!</button>
            <button onClick={this.iterate.bind(this)}>Starta!</button>
            <Transition
                style={{ listStyle: 'lower-latin inside' }}
                component={'ul'}
                enter={{ opacity: 1, translateX: spring(0, { stiffness: 200, damping: 20 }) }}
                leave={{ opacity: 0, translateX: 250 }}
            >
                {this.state.items.map((item, index) => (<li key={`testitem-${index}`} style={{ fontSize: '0.8rem' }} >{item}</li>))}
            </Transition>
        </div>);
    }

    private cancelRows() {
        clearInterval(this.interval);
        this.timerOn = false;
    }

    private resetStuff() {
        clearInterval(this.interval);
        this.setState(
            { items: [], num: 0 },
        );
        this.timerOn = false;
        this.iterate();
    }

    private iterate() {
        if (!this.timerOn) {
            this.interval = setInterval(() => {
                this.setState(
                    {
                        items: this.state.items.concat([`nummer:${this.state.num}`]),
                        num: this.state.num + 1,
                    },
                );
                if (this.state.num > 20) { this.resetStuff(); }
            }, 300);
        }
        this.timerOn = true;
    }
}
