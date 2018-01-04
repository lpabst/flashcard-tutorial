import React, {Component} from 'react';

class Tweet extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    getTimeSincePosted(date){
        let today = new Date();
        let oldDate = new Date(date);
        let todaySec = Math.floor(today.getTime() / 1000);
        let oldDateSec = Math.floor(oldDate.getTime() / 1000);
        let diff = todaySec - oldDateSec;

        let min = 60;
        let hour = 60*60;
        let day = 60*60*24;

        if (diff < min){
            return 'now';
        }else if(diff < hour){
            return Math.floor(diff / min) + 'm';
        }else if (diff < day){
            return Math.floor(diff / hour) + 'h';
        }else{
            return Math.floor(diff / day) + 'd';
        }
    }

    render(){
        return(
            <div className='tweet'>
              <img src={this.props.imgSrc} className='tweet_user_thumbnail' alt='tweet thumbnail' />
              <p className='tweet_username'>{this.props.username}</p>
              <p className='f12'>{this.props.twitterHandle}</p>
              <p className='f12'>{this.getTimeSincePosted(this.props.datePosted)}</p>
              <p className='tweet_caption'>{this.props.caption}</p>
              <div className='tweet_controls'>
                <img src='https://pbs.twimg.com/media/CWX5igcWoAEsUxM.png' alt='tweet comment' className='tweet_controls_comment tweet_control' />
                <img src='https://www.shareicon.net/download/2016/04/20/752568_arrows_512x512.png' alt='tweet arrows' className='tweet_control' />
                <img src='http://colouringbook.org/social/clipartist.net/G/green_heart_icon_ocal_favorites_icon_selected_green_black_white_line_art-999px.png' alt='tweet heart' className='tweet_control' />
                <img src='http://www.impoplanet.cl/wp-content/uploads/2017/03/envelope-icon.png' alt='tweet envelope' className='tweet_control' />
              </div>
            </div>
        )
    }
}

export default Tweet;