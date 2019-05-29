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
      health_score: 'A'
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
      // console.log(data);
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

  getBusinessInfoData(id) {
    axios.get(`/restaurant/info/${id}`)
    .then(({data}) => {
      this.setState({
        today_time: data.hours_today,
        price_range: data.price_range
      })
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
        />
        <Hours 
          todayTime={this.state.today_time}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));