import React from "react";
import '../Feedback/feedback.css';


function Section({ title, children,style }) {

    return (
	          <section className={style} >
			    	<h1 className="widget__title">{title}</h1>
		        {children}
	          </section>
				 )


};

export default Section;
