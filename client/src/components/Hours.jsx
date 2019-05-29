import React from 'react';

class Hours extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    var weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
      <div id='hours_container'>
        <h3 id='hours_h3'>Hours</h3>
        <div id='days_container'>
        <ul id='days' class='days_list'>
          {weekDays.map((day) => {
            return (
              <li><span class='day'>{day}</span></li>
            )
          })}
        </ul>
        <ul id='hours' class='days_list'>
          {weekDays.map((day) => {
            return (
              <li><span class='timeToday'>{this.props.todayTime}</span></li>
            )
          })}
        </ul>
        </div>
        {/* <a href='' id='edit_business'>Edit business info</a> */}
      </div>
    )
  }
}

export default Hours;