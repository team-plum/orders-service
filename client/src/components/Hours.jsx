import React from 'react';

class Hours extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    var weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
      <div>
        <ul id='hours'>
          {weekDays.map((day) => {
            return (
              <li>{day}<span id='timeToday'>{this.props.todayTime}</span></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Hours;