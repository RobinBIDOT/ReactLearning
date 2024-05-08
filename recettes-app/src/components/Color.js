import React, { Component, createContext } from 'react';

// Creating context outside of the provider
const ColorContext = createContext({
    state: { color: 'red' } // Default context value if not overridden by a Provider
});

class ColorProvider extends Component {
    state = {
        color: 'red' // Initial color state
    }

    render() {
        return (
            <ColorContext.Provider value={{ state: this.state }}>
                {this.props.children}
            </ColorContext.Provider>
        );
    }
}

export { ColorContext, ColorProvider };
