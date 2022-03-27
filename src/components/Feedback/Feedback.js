import React, { Component } from 'react';

import initialFeedback from '../feedback.json';

import FeedbackOptions from '../FeedbackOptions'
import Statistics from '../Statistics'
import Section from '../Section'
import Notification from '../Notification'


class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = (option) => {
    return this.setState((prevState) => {
      if (option === 'Good') {
        return { good: prevState.good + 1 };
      } if (option === 'Neutral') {
        return { neutral: prevState.neutral + 1 };
      } else {
        return { bad: prevState.bad + 1 };
      }
    });
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    // return this.setState((prevState) => prevState.good + prevState.neutral + prevState.bad)
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good >= 1) ? (this.state.good / this.countTotalFeedback() * 100).toFixed(0) : 0)
  }
  
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          {initialFeedback.map(({ id, option }) => (
            <FeedbackOptions
              key={id}
              option={option}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          ))}
        </Section>

        {(this.countTotalFeedback() !== 0) ? 
          (<Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad=
              {bad} total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>)
          :
          (<Notification message={'There is no feedback'}/>)
        }
      </>
    );
  };
}
export default Feedback;
