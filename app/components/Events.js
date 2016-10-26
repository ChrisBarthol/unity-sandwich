import React, {Component} from 'react';
import Teamwork from '../img/teamwork_s.jpg'

var Events = React.createClass({

  render(){
    return (
      <div id='details' className='text-center'>
        <h1>Corporate Events</h1>
        <p className='lead'>Lunch time team building.</p>
        <div>
          <img src={Teamwork} alt="Teamwork" height='300' width='600'/>
          <div className='clear'>Treat your employees</div>
        </div>
        <p>
          Unity Sandwiches are not just for weddings but act as an excellent
          teambuiling session for you and your employees.
        </p>
      </div>
    )
  }
});

export default Events;
