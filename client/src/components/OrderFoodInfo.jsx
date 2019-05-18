import React from 'react';

class OrderFoodInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='main1'>
        <div id='fee_container'>
          <div>Fee</div>
          <div>{this.props.deliveryFee}</div>
        </div>
        <div id='delivery_min_container'>
          <div>Delivery Min</div>
          <div>{this.props.deliveryMin}</div>
        </div>
        <div id='arrives_in_container'>
          <div>Arrives In</div>
          <div>{this.props.deliveryTime}</div>
        </div>
      </div>
    )
  }
}

export default OrderFoodInfo;