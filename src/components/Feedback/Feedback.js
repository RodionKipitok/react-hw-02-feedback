import React, { Component } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
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
     
		return <Section>
			<h1 className="widget__title">Please leave feedback</h1>
			<FeedbackOptions  onLeaveFeedback={this.leaveFeedback}/>
	     <Statistics good = {this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback}  positivePercentage={this.countPositiveFeedbackPercentage}/>
	     </Section>
	};
};

export default ReviewsWidget;


// good = {this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}