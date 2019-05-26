import React from 'react';
import OrderFoodInfo from './OrderFoodInfo.jsx';
import OrderFoodForm from './OrderFoodForm.jsx';

class OrderFood extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    var radioFormat = {
      'box-shadow': '0 0 0 3px orange'
    }
    return (
      <div>
        <h4>Order Food</h4>
        <div>
          <input type='radio' name='my-input' style={radioFormat} id='yes'></input>
          <label for='yes'>Delivery</label>
          <input type='radio' name='my-input' id='no'></input>
          <label for='no'>Takeout</label>
        </div>
        <OrderFoodInfo 
          deliveryFee={this.props.deliveryFee}
          deliveryMin={this.props.deliveryMin}
          deliveryTime={this.props.deliveryTime}
        />
        <OrderFoodForm />
      </div>
    )
  }
}

export default OrderFood;