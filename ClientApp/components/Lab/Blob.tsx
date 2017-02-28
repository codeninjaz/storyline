import * as React from 'react';
import { Motion, spring } from 'react-motion';

interface IBlobState {
    isActive: boolean;
}

export default class Blob extends React.Component<any, IBlobState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    public render() {
        const style = this.state.isActive ? this.blobActiveStyle() : this.blobInitialStyle();
        const text = this.state.isActive ? 'Active!' : 'Inactive';
        return (
            <Motion style={style}>
                {(st) => (
                    <div style={this.divStyle(st)} onClick={this.activate.bind(this)}>
                        {text}
                    </div>)
                }
            </Motion>
        );
    }

    private divStyle(st) {
        return {
            backgroundColor: 'rgba(127,255,130,1)',
            border: 'solid 1px #999',
            height: '50px',
            left: '50%',
            margin: '30px',
            position: 'relative',
            textAlign: 'center',
            transform: 'translateX(-50%)',
            width: st.width + 'px',
        };
    };

    private blobInitialStyle() {
        return {
            width: spring(300, { stiffness: 300, damping: 10 }),
        };
    };

    private blobActiveStyle() {
        return {
            width: spring(500, { stiffness: 300, damping: 10 }),
        };
    };


    private activate() {
        this.setState({
            isActive: !this.state.isActive,
        });
    }
};
