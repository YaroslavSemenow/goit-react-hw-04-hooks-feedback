import { useState } from 'react';
import style from './Feedback.module.css';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementResponses = e => {
    const name = e.currentTarget.name;

    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() > 0) {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  };

  const btnOptions = Object.keys({ good, neutral, bad });
  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <div className={style.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={btnOptions}
          onLeaveFeedback={incrementResponses}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
}
