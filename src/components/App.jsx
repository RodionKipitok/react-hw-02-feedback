import React, { Component } from "react";
import Section from "./Feedback/Section";
import Statistics from "./Feedback/Statistics";
import Notification from "./Feedback/Notification";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import './Feedback/feedback.css';

class App extends Component {



  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  leaveFeedback = (event) => {
  
   console.log('click');

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
  
  const {good,neutral,bad} = this.state
  const nameBtn = Object.keys(this.state);
  const total = this.countTotalFeedback;
  
  console.log(total);

  return(
    <>
    <Section title={'Please leave feedback'} typeOfStyles={'mainSection'}>
      <FeedbackOptions options={nameBtn} onLeaveFeedback={this.leaveFeedback} />
    </Section>

        <Section typeOfStyles={'statisticsSection'}  title={'Statistics'}>
          <>
          
          {total() === 0 ? ( <Notification message={'There is no feedback'}/>)

          : ( <   Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              countPercentage={this.countPositiveFeedbackPercentage}
            />)}</>
      
        </Section>

    </>
  )
  

};
}

export default App;

