import React, { Component } from "react";
import '../Feedback/feedback.css';


class ReviewsWidget extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}


	leaveFeedback = (event) => {

		console.log(event);
		console.log(event.target.id);

     switch (event.target.id) {
		case 'good':
		    	
      
			return this.setState((prevState) => {

				console.log({good: prevState.good + 1,}.good);
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
 

	}

	countTotalFeedback = (event) => {
      this.setState( (prevState) => {
        
			return {
				total: prevState.good + prevState.neutral + prevState.bad
			}

		})
	  

	    
	};

	countPositiveFeedbackPercentage = () => {


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
				<li><span className="statistics__value'">Good:{this.state.good}</span></li>
				<li><span className="statistics__value">Neutral:{this.state.neutral}</span></li>
				<li><span className="statistics__value">Bad:{this.state.bad}</span></li>
				<li><span className="statistics__value">Total:{this.state.total}</span></li>
				<li><span className="statistics__value">Positive feedback:43%</span></li>
			</ul>
		</section>;
	};
};

export default ReviewsWidget;