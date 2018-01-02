import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tweet from './components/Tweet.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:''
    }
  }

  render() {
    return (
      <div className="App">

        <header className='desktop_header'>
        </header>

        <div className='timeline_container'>

          <div className='timeline_user_tweet'>
            <img src='https://pbs.twimg.com/profile_images/638872319507566592/P7f8VvkU_normal.jpg' alt='user thumbnail' className='timeline_thumbnail' />
            <input className='timeline_input' placeholder="What's Happening?" />
          </div>

          <div className='timeline_tweets_wrapper'>

            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />

            

          </div>

        </div>

      </div>
    );
  }
}

export default App;
