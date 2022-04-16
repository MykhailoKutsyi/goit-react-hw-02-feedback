import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const stateKey = e.target.name;
    console.log(stateKey);
    this.setState(state => ({
      [stateKey]: state[stateKey] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    // return this.setState((prevState) => prevState.good + prevState.neutral + prevState.bad)
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good >= 1
      ? ((good / this.countTotalFeedback()) * 100).toFixed(0)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        {countTotalFeedback() !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </>
    );
  }
}

export default App;
