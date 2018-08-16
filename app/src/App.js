import React, { Component } from 'react';

import Header from "./components/header";
import Footer from "./components/footer";
import MessagesList from "./components/messagesList";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <MessagesList/>
          <Footer/>
      </div>
    );
  }
}

export default App;
