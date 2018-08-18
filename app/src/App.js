import React, { Component } from 'react'

import Header from './components/header'
import Footer from './components/footer'
import Inbox from './components/inbox'

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Inbox/>
                <Footer/>
            </div>
        );
    }
}

export default App;
