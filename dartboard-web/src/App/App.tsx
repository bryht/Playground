import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from '../Welcome/Welcome';
import Choose from '../Welcome/WelcomeChoose';
import CreateGame from '../CreateGame/CreateGame';
export class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Welcome}></Route>
                <Route path='/choose' component={Choose}></Route>
                <Route path='/create' component={CreateGame}></Route>
            </Router>
        )
    }
}

export default App
