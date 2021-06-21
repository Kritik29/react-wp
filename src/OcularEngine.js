import React, { Component } from 'react';

class OcularEngine extends Component {
    render() {

        return (
            <div>
                <div style={buttonStyle}>
                <button id="button" style={neuButton} onClick={() => window.location.reload(false)}>GENERATE</button>
                </div>
                <div style={imgStyle}>
                <img id="img" style={imgResize} src={"https://source.unsplash.com/1600x900/?wallpaper, hd"} alt="wallpaper"></img>
                </div>
            </div>
        )
    }
}

const buttonStyle = {
    marginBottom: '20px',
    textAlign: "center",
    borderRadius: '40px'
}

const neuButton = {
    position: 'relative',
    textDecoration: 'none',
    padding: '10px 30px',
    fontWeight: '500',
    color: '#000',
    letterSpacing: '2px',
    borderRadius: '40px',
    boxShadow: '-2px -2px 8px rgba(255,255,255,1)',
}

const imgStyle = {
    float: 'center',
    textAlign: 'center',
}

const imgResize = {
    maxWidth: '60%',
    height: 'auto',
    border: '10px solid #000d03',
    borderRadius: '1%'
}

export default OcularEngine;