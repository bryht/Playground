import React, { Component } from 'react'
import WelcomeBody from '../WelcomeBody/WelcomeBody';

export default class Choose extends Component {
    render() {
        return (
           <WelcomeBody>
               <h2>
                   Welcome 111
               </h2>
               <button>Create A Game</button>
               <button>Join A Game</button>
           </WelcomeBody>
        )
    }
}
