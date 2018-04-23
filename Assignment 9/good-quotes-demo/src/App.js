import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBxZVekYg2uZriXn5u1yeK5Pp1ouOolquY",
  authDomain: "goodquotes-myers.firebaseapp.com",
  databaseURL: "https://goodquotes-myers.firebaseio.com",
  projectId: "goodquotes-myers",
  storageBucket: "goodquotes-myers.appspot.com",
  messagingSenderId: "905640856451"
};

var firebaseApp = firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);

    //create input references
    this.textInput = React.createRef();
    this.authorInput = React.createRef();

    //set up react state
    this.state = {
      quotes: []
    };
  }

  componentWillMount(){
    //get db reference
    let db = firebaseApp.database().ref('quotes');

    //wire event handler for new quotes
    db.on('child_added', snapshot => {
      //update react state
      let data = snapshot.val()

      let quote = {
        id: snapshot.key,
        text: data.text,
        author: data.author
      };

      this.setState({ quotes: [quote].concat(this.state.quotes) });
    })
  }

  addQuote(event){
    event.preventDefault();

    //create new quote object from input values
    let quote = {
      author: this.authorInput.current.value,
      text: this.textInput.current.value
    }

    //get db reference, add new quote, then reset textbars
    let db = firebaseApp.database().ref('quotes');
    db.push(quote);

    this.authorInput.current.value = '';
    this.textInput.current.value = '';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.addQuote.bind(this)}>
          <textarea rows="5" cols="50" ref={this.textInput}></textarea>
          <input type="text" ref={this.authorInput}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default App;
