import React from "react";
import '../Feedback/feedback.css';


function Section(props) {
	
	console.log(props);

    return (<section className="widget">
		  {props.children}
	 </section>)


};

export default Section;