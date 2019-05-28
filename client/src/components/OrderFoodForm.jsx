import React from 'react';

class OrderFoodForm extends React.Component {
  constructor(props) {
    super(props)
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form id='textForm' onSubmit={this.submitForm}>
        <div><label for='textInput' id='delivery_address'>Delivery Address</label></div>
        <div><input id='textInput' type='text' value='303 Spring St, New York, NY 10013'/></div>
        <div><input type='submit' value='Start Order' id='order_submit'></input></div>
      </form>
    )
  }
}

export default OrderFoodForm;