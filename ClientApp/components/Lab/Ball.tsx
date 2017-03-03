import * as React from 'react';
import { Motion, spring } from 'react-motion';

const ballStyle = (b) => {
    return {
        backgroundColor: 'rgb(' + calcColor(b.color) + ', ' + calcColor(b.color, 100, 150) + ' , 255)',
        border: 'solid 2px #000',
        borderRadius: b.bRadius + '%',
        cursor: 'pointer',
        height: b.diameter,
        left: '50%',
        margin: '30px',
        opacity: 0.7,
        paddingTop: '25px',
        position: 'absolute',
        textAlign: 'center',
        top: '200px',
        transform: 'translate(-50%, -50%)',
        userSelect: 'none',
        width: b.diameter,
        zIndex: 1000,
    };
};

const textStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    left: '50%',
    position: 'absolute',
    textTransform: 'uppercase',
    top: '50%',
    transform: 'translate(-50%, -50%)',
};

const ballInitial = () => {
    const opt = { stiffness: 800, damping: 10 };
    return {
        bRadius: spring(50, opt),
        color: spring(0, opt),
        diameter: spring(100, opt),
    };
};

const ballActive = () => {
    const opt = { stiffness: 100, damping: 30 };
    return {
        bRadius: spring(10, opt),
        color: spring(1, opt),
        diameter: spring(140, opt),
    };
};

const calcColor = (value: number, low: number = 0, high: number = 255) => {
    return Math.round(value * high + low);
};

const Ball = (props) => {
    const style = props.isActive ? ballActive() : ballInitial();
    return (
        <Motion style={style}>
            {(ballst) => (
                <div style={ballStyle(ballst)} onClick={props.onClick.bind(this)} >
                    <span style={textStyle}>{ballst.color}</span>
                </div>
            )}
        </Motion>
    );
};

export default Ball;
