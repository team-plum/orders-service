import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form id='textForm' onSubmit={this.submitForm} style={this.props.styleProp}>
        <div><input type='submit' value='Start Order' id='order_submit'></input></div>
      </form>
    )
  }
}

export default Button;