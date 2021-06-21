import React from 'react';

function Header () {
    return(
        <div>
            <h1 style={headerStyle}><span role="img">💎 </span>The Ocular Engine<span role="img"> 💎</span></h1>
            <p style={subtitle}>4K Wallpaper Generator</p>
        </div>
    )
}

const headerStyle = {
    textAlign: "center",
    paddingBottom: '2px',
    fontFamily: 'Helvetica',
    fontWeight: '600',
    fontSize: '48px',
    color: '#000',
    float: 'center'
}

const subtitle = {
    textAlign: 'center', 
    fontFamily: 'Helvetica', 
    fontSize: '18px',
    color: '#000',
}

export default Header;