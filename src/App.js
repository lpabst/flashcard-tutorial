import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

            <div className='tweet'>
              <img src='https://pbs.twimg.com/profile_images/942784892882112513/qV4xB0I3_bigger.jpg' className='tweet_user_thumbnail' alt='tweet thumbnail' />
              <p className='tweet_username'>The New York Times</p>
              <p className='f12'>@nytimes</p>
              <p className='f12'>20m</p>
              <p className='tweet_caption'>Self-improvement is great. But relaxing and going about things at your own pace is pretty great, too.</p>
              <div className='tweet_controls'>
                <img src='https://pbs.twimg.com/media/CWX5igcWoAEsUxM.png' alt='tweet comment' className='tweet_controls_comment tweet_control' />
                <img src='https://www.shareicon.net/download/2016/04/20/752568_arrows_512x512.png' alt='tweet arrows' className='tweet_control' />
                <img src='http://colouringbook.org/social/clipartist.net/G/green_heart_icon_ocal_favorites_icon_selected_green_black_white_line_art-999px.png' alt='tweet heart' className='tweet_control' />
                <img src='http://www.impoplanet.cl/wp-content/uploads/2017/03/envelope-icon.png' alt='tweet envelope' className='tweet_control' />
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
