import React from 'react';
import ReactDOM from 'react-dom';
import OrderFood from './components/OrderFood.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fee: 3,
      delivery_min: 10,
      delivery_time: '20-45 Mins',
    }
  }

  componentDidMount() {
    var randomId = Math.floor(Math.random() * 100);
    this.getOrderFoodData(randomId);
  }

  getOrderFoodData(id) {
    axios.get(`/order/food/${id}`)
    .then(({data}) => {
      console.log(data);
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

  render() {
    return (
      <div>
        <div>React App</div>
        <OrderFood 
          deliveryFee={this.state.fee}
          deliveryMin={this.state.delivery_min}
          deliveryTime={this.state.delivery_time}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));