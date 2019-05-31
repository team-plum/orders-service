import React from 'react';
import ReactDOM from 'react-dom';
import OrderFood from './components/OrderFood.jsx';
import BusinessInfo from './components/BusinessInfo.jsx';
import Hours from './components/Hours.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fee: 3,
      delivery_min: 10,
      delivery_time: '20-45 Mins',
      today_time: '11:00 am - 10:00 pm',
      price_range: 'Under $10',
      health_score: 'A',
      open_info: 'Closed Now'
    }
  }

  componentDidMount() {
    var randomId = Math.floor(Math.random() * 100);
    this.getOrderFoodData(randomId);
    this.getBusinessInfoData(randomId);
  }

  getOrderFoodData(id) {
    axios.get(`/order/food/${id}`)
    .then(({data}) => {
      this.setState({
        fee: data.fee,
        delivery_min: data.delivery_min,
        delivery_time: data.delivery_time
      })
    })
    .catch((err) => {
      console.error(err)
    });
  }

  getTime() {
    var time = Date();
    var sym = time.indexOf(":");
    var hour = Number(time.slice(sym-2, sym));
    var mins = Number(time.slice(sym+1, sym+3))/60;
    return hour + mins;
  }

  getTodayHours() {
    var t = this.state.today_time;
    var openHour = Number(t.split('-')[0].slice(0, t.split('-')[0].indexOf(":")));
    var closeHour = Number(t.split('-')[1].slice(0, t.split('-')[1].indexOf(":"))) + 12;
    return [openHour, closeHour];
  }

  getBusinessInfoData(id) {
    axios.get(`/restaurant/info/${id}`)
    .then(({data}) => {
      this.setState({
        today_time: data.hours_today,
        price_range: data.price_range,
        health_score: data.health_score
      })
    })
    .then(() => {
      var timeNow = this.getTime();
      var hoursToday = this.getTodayHours();
      if (timeNow > hoursToday[0] && timeNow < hoursToday[1]) {
        this.setState({
          open_info: "Open Now"
        })
      }
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <div>
        <OrderFood 
          deliveryFee={this.state.fee}
          deliveryMin={this.state.delivery_min}
          deliveryTime={this.state.delivery_time}
        />
        <BusinessInfo 
          todayTime={this.state.today_time}
          priceRange={this.state.price_range}
          healthScore={this.state.health_score}
          openInfo={this.state.open_info}
        />
        <Hours 
          todayTime={this.state.today_time}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));