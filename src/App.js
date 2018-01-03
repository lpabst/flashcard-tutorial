import React, { Component } from 'react';
import './App.css';

import Tweet from './components/Tweet.js';
import Header from './components/Header.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      tweetBoxOpen: false,
      tweets: [
        {
          imgSrc: 'https://pbs.twimg.com/profile_images/942784892882112513/qV4xB0I3_bigger.jpg',
          username: 'The New York Times',
          caption: 'Self-improvement is great. But relaxing and going about things at your own pace is pretty great, too.',
          twitterHandle: '@nytimes',
          timeSincePosted: '20m'
        },
        {
          imgSrc: 'https://pbs.twimg.com/profile_images/188302352/nasalogo_twitter_bigger.jpg',
          username: 'NASA',
          caption: 'The supermoon is here! Be sure to bundle up then lead your “pack” outside to view the #WolfMoon 🐺, the most super of the three supermoons this winter!',
          twitterHandle: '@NASA',
          timeSincePosted: '3h'
        }
      ]
    }

    this.updateUserInput = this.updateUserInput.bind(this);
  }

  updateUserInput(event){
    let input = event.target.value;
    this.setState({
      userInput: input
    });
  }

  handleTweetBoxFocus(hasFocus){
    if (hasFocus || this.state.userInput){
      this.setState({
        tweetBoxOpen: true
      })
    }else{
      this.setState({
        tweetBoxOpen: false
      })
    }
  }

  render() {
    let tweetBoxHeight = this.state.tweetBoxOpen ? '60px' : '22px';
    return (
      <div className="App">

        <Header />

        <div className='timeline_container'>

          <div className='timeline_user_tweet'>
            <img src='https://pbs.twimg.com/profile_images/638872319507566592/P7f8VvkU_normal.jpg' alt='user thumbnail' className='timeline_thumbnail' />
            <textarea className='timeline_input' placeholder="What's Happening?" onChange={this.updateUserInput} value={this.state.userInput} style={{height: tweetBoxHeight}} onFocus={() => this.handleTweetBoxFocus(true)} onBlur={() => this.handleTweetBoxFocus(false)} />
            {
              this.state.tweetBoxOpen ? <button>Tweet</button> : null
            }
          </div>

          <div className='timeline_tweets_wrapper'>

            {
              this.state.tweets.map( (item, i) => {
                return <Tweet imgSrc={item.imgSrc} caption={item.caption} username={item.username} twitterHandle={item.twitterHandle} timeSincePosted={item.timeSincePosted} />
              })
            }

            

          </div>

        </div>

      </div>
    );
  }
}

export default App;
