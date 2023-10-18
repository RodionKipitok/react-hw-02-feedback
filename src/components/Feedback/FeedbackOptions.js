import React from "react";

function FeedbackOptions({options,onLeaveFeedback}){
 

	return (
		<div className="list__btn">

		{options.map(item => (

			<button key={item} type="button" className="btn" id={item} onClick={onLeaveFeedback}  >{item}</button>	))}

		</div>
	)

	 
}
export default FeedbackOptions;

	