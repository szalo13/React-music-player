// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search.component';

// Search component created as a class
class App extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
            <Search />
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render( < Search / > ,
    document.getElementById('content')
);
