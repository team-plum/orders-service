import React from 'react';

class BusinessInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>Today {this.props.todayTime}</div>
        <div><a href="">Full Menu</a></div>
        <div>Price range {this.props.priceRange}</div>
      </div>
    )
  }
}

export default BusinessInfo;