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
    var checkedRadio = 'checked';
    return (
      <div id='orderfood'>
        <svg id="_order" height="100%" viewBox="0 0 24 24" width="100%"><g><path d="M19 10V4h-6v10H9.444a3.485 3.485 0 0 0-4.888 0H2v3h1.55A3.49 3.49 0 0 0 7 20a3.49 3.49 0 0 0 3.45-3h3.1c.24 1.69 1.69 3 3.45 3 1.76 0 3.21-1.31 3.45-3H22v-5l-3-2zM7 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8-12h2v3h-2V6zm2 12c-.83 0-1.5-.67-1.5-1.5S16.17 15 17 15s1.5.67 1.5 1.5S17.83 18 17 18z"></path><path d="M6 7V6c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1H6m2-4H7a3 3 0 0 0-3 3v1H2v7h11V7h-2V6a3 3 0 0 0-3-3" opacity=".502"></path></g></svg>
        <h3 id='order_food'>Order Food</h3>
        <div id='radio_container'>
          <input type='radio' name='my-input' checked={checkedRadio} id='yes'></input>
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