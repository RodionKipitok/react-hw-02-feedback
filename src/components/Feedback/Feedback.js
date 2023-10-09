import React, { Component } from "react";
import '../Feedback/feedback.css';


class ReviewsWidget extends Component {

	static defaultTotal = {
		total: 0,
	}



	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	}


	leaveFeedback = (event) => {


      switch (event.target.id) {
		case 'good':
		    	
      
			return this.setState((prevState) => {
			
				return {good: prevState.good + 1,};

			})
	   
		case 'neutral':
			
			return this.setState((prevState) => {
				
				return {neutral: prevState.neutral + 1,}

			})	

		case 'bad':
			
			return this.setState((prevState) => {
				return {bad: prevState.bad + 1,}
			})		
		default:
			break;
	  }

     

	};

	countTotalFeedback = () => {

		const {good,neutral,bad} = this.state;

		return good + neutral + bad;

	}



	countPositiveFeedbackPercentage = () => {

		const {good} = this.state

		const totalFeedback = this.countTotalFeedback;

		return totalFeedback === 0 ? 0 : (good / totalFeedback()) * 100;
 

	}

	render() {

		return <section className="widget">
			<h1 className="widget__title">Please leave feedback</h1>
		   <ul className="list__btn">
			<li><button type="button" className="btn" id="good" onClick={this.leaveFeedback} >Good</button></li>
			<li><button type="button" className="btn" id="neutral" onClick={this.leaveFeedback}>Neutral</button></li>
			<li><button type="button" className="btn" id="bad" onClick={this.leaveFeedback}>Bad</button></li>
		   </ul>
			<ul className="list__statistics">
			  <h2>Statistics</h2>
				{this.countTotalFeedback() === 0 ? <p>There is no feedback</p> : 
				<>
				<li><span className="statistics__value'">Good:{this.state.good}</span></li>
				<li><span className="statistics__value'">Neutral:{this.state.neutral}</span></li>
				<li><span className="statistics__value">Bad:{this.state.bad}</span></li>
            <li><span className="statistics__value">Total: {this.countTotalFeedback()}</span></li>
           <li><span className="statistics__value">Positive feedback:{this.countPositiveFeedbackPercentage().toFixed()}%</span></li> 
			  </>
				 }
			</ul>
		</section>;
	};
};

export default ReviewsWidget;


{/* 
<li><span className="statistics__value">Neutral:{this.state.neutral}</span></li>
<li><span className="statistics__value">Bad:{this.state.bad}</span></li>
<li><span className="statistics__value">Total: {this.countTotalFeedback()}</span></li>
<li><span className="statistics__value">Positive feedback:{this.countPositiveFeedbackPercentage().toFixed()}%<span><li></li> */}