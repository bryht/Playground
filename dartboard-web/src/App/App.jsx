import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from '../Welcome/Welcome';
import Choose from '../Choose/Choose';
export class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Welcome}></Route>
                <Route path='/choose' component={Choose}></Route>
            </Router>
        )
    }
}

export default App
