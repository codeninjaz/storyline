import * as React from 'react';

const ballStyle = () => {
    return {
        backgroundColor: '#ff00f0',
        border: 'solid 8px #000',
        borderRadius: '50%',
        height: '100px',
        margin: '30px',
        paddingTop: '25px',
        textAlign: 'center',
        width: '100px',
    }
};

const ballInitial = () => {
    return {
        diameter: 100,
    }
}

const ballActive = () => {
    return {
        diameter: 120,
    }
}

const Ball = () => {
    return (
        <div style={ballStyle()} >
            Cirkel
        </div>
    );
};

export default Ball;
