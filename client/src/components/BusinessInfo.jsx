import React from 'react';

class BusinessInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='businessinfo'>
        <div id='clock_div'>
        <svg id="_clock" height="100%" viewBox="0 0 24 24" width="100%"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm3 11c-.19 0-.384-.055-.555-.168L11 12.535V7a1 1 0 0 1 2 0v4.465l2.555 1.703A1 1 0 0 1 15 15z"></path></svg>
        <div id='today_div'>Today <span id='today_time'>{this.props.todayTime}</span></div>
        </div>

        <div id='food_div'>
        <svg id="_food" height="100%" viewBox="0 0 24 24" width="100%"><path d="M17.22 22a1.78 1.78 0 0 1-1.74-2.167l1.298-4.98L14 13l1.756-9.657A1.635 1.635 0 0 1 19 3.635V20.22A1.78 1.78 0 0 1 17.22 22zm-7.138-9.156l.697 7.168a1.79 1.79 0 1 1-3.56 0l.7-7.178A3.985 3.985 0 0 1 5 9V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.83c0 1.85-1.2 3.518-2.918 4.014z"></path></svg>
        <div><a href="" id='full_menu'>Full menu</a></div>
        </div>

        <div id='price_div'>
        <div id='_price'>$$$$</div>
        <div id='pricerange_div'>Price range <span id='price_range'>{this.props.priceRange}</span></div>
        </div>

        <div id='health_div'>
        <svg id="_medical" height="100%" viewBox="0 0 24 24" width="100%"><path d="M15 9V4H9v5H4v6h5v5h6v-5h5V9h-5z"></path></svg>
        <div><a href='' id='health_score'>Health Score</a><span id='healthScore'>{this.props.healthScore}</span></div>
        <div id='hdScores'>Powered by HDScores</div>
        </div>
      </div>
    )
  }
}

export default BusinessInfo;