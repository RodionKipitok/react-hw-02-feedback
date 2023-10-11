import React from "react";
import '../Feedback/feedback.css';





function Statistics (data) {

	
	const {good,neutral,bad,total,positivePercentage} = data;


	return (
		<ul className="list__statistics">
		<h2>Statistics</h2>
		 {total() === 0 ? <p>There is no feedback</p> : 
		 <>
		 <li><span className="statistics__value'">Good:{good}</span></li>
		 <li><span className="statistics__value'">Neutral:{neutral}</span></li>
		 <li><span className="statistics__value">Bad:{bad}</span></li>
		 <li><span className="statistics__value">Total: {total()}</span></li>
		<li><span className="statistics__value">Positive feedback:{positivePercentage().toFixed()}%</span></li> 
		</>
		  }
	 </ul>)
	
};

export default Statistics;

