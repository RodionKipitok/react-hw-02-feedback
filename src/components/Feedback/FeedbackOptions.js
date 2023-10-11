import React from "react";



function FeedbackOptions(data){
 
	const {onLeaveFeedback} = data;

	

	return(

  

		<ul className="list__btn">
		<li><button type="button" className="btn" id="good" onClick={onLeaveFeedback} >Good</button></li>
		<li><button type="button" className="btn" id="neutral" onClick={onLeaveFeedback}>Neutral</button></li>
		<li><button type="button" className="btn" id="bad" onClick={onLeaveFeedback}>Bad</button></li>
		</ul>
	
	);
}

export default FeedbackOptions;