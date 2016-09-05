import React, {Component} from 'react';
import Candle from '../img/candle_s.jpg';
import Sand from '../img/sand_m.jpg';

var Detail = React.createClass({
  render(){
    return (
      <div id='details' className='text-center'>
        <h1>What are Unity Sandwiches</h1>
        <div className='container'>
          <p className='lead'>The millenial way of expressing love.</p>
          <p>Unity Sandwiches are similar to such wedding events as Unity Candles
          or that sand thing people do.  You and your significant other will create
          your perfect sandwich together.  As a testiment to your love and commitment
          to each other, you will each choose your favorite sandwich fixings and build
          your wedding sandwich while your guests look on.  Your wedding sandwich is
          unique to you and your significant other.  Once you build your wedding sandwich
          you can each bit into it a la Lady and the Tramp<sup>1</sup>.  Do not feel obligated
          to each the entire sandwich at this time. However, it is said that the more that is
          enjoyed in front of everyone is porportional to the well being of your marriage.
          After the cermony, during the cocktail hour, your guests will be able to
          chow down on miniture versions of the sandwich you enjoy.</p>
          <row>
            <div className='col-xs-6'>
              <img src={Candle} alt="Candle" height='200' width='250'/>
              <div className='clear'>You cannot eat candles</div>
            </div>
            <div className='col-xs-6'>
              <img src={Sand} alt="Candle" height='200' width='250'/>
              <div className='clear'>That weird sand thing</div>
            </div>
          </row>
          <p className='lead'> Why choose Unity Sandwiches?</p>
          <p>Our trained sandwich professionals will help you:
            <li>Choose your favorite fixings</li>
            <li>Recommend combinations of sandwich materials</li>
            <li>Plan the perfect sandwich layout for easy building during cermony</li>
            <li>Years of experience in our one true passion, unity sandiwches</li>
            <li>Unprecidented attention to detail</li>
          </p>
          <p className='small-text'> 1) We in no way are calling or refering to you
          or you significant other as a tramp.</p>
        </div>
      </div>
    )
  }
});

export default Detail;
