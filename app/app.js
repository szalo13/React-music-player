// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search.component';
import Details from './components/details.component';

// Search component created as a class
class App extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
            <div>
                <Search />
                <Details title={'Track title'} />
            </div>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render( < Search / > ,
    document.getElementById('content')
);
