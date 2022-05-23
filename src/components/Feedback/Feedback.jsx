import React from 'react';
import style from './Feedback.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGoodResponses = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  incrementNeutralResponses = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  incrementBadResponses = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() > 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  }

  render() {
    const {
      incrementGoodResponses,
      incrementNeutralResponses,
      incrementBadResponses,
    } = this;
    // const { state, incrementGoodResponses, countPositiveFeedbackPercentage } = this;
    // const { good, neutral, bad } = state;

    const buttonOptionsArr = Object.keys(this.state);
    const incrementsArr = [
      incrementGoodResponses,
      incrementNeutralResponses,
      incrementBadResponses,
    ];
    const totalFeedback = this.countTotalFeedback();

    return (
      <div className={style.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonOptionsArr}
            onLeaveFeedback={incrementsArr}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
