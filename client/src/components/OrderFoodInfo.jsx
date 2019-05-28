import React from 'react';

class OrderFoodInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='main1'>
        <div class='delivery_container'>
          <div id='fee_container' class='delivery_container1'>
            <div class='delivery_attribute'>Fee</div>
            <div class='delivery_attribute_stats'>${this.props.deliveryFee}</div>
          </div>
        </div>

        <div class='delivery_container'>
          <div id='delivery_min_container' class='delivery_container1'>
            <div class='delivery_attribute'>Delivery Min</div>
            <div class='delivery_attribute_stats'>${this.props.deliveryMin}</div>
          </div>
        </div>

        <div class='delivery_container'>
          <div id='arrives_in_container' class='delivery_container1'>
            <div class='delivery_attribute'>Arrives In</div>
            <div class='delivery_attribute_stats'>{this.props.deliveryTime}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderFoodInfo;