import React, { Component } from 'react';

class Header extends Component{
    
    render(){
        
        // This next line is how we would write our components if we didn't have JSXX*
        // JSX allows us to write HTML code inside the javascript code
        //return React.createElement('div', null, 'Hello there, this is a React Composnet!')
        return (
            <header className="App-header">
                <h2>{this.props.text}</h2>
            </header>
        )
        // <h1 className="App-title">Discover the Movie Mojo</h1>
    }
}

export default Header;