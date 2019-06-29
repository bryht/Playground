import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './Components/Welcome/Welcome';
import Choose from './Components/Welcome/WelcomeChoose';
import CreateGame from './Components/CreateGame/CreateGame';
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
