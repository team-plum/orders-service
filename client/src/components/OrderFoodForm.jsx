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
        <div><label for='textInput'>Delivery Address</label></div>
        <div><input id='textInput' type='text'/></div>
        <div><input type='submit' value='Submit Order'></input></div>
      </form>
    )
  }
}

export default OrderFoodForm;