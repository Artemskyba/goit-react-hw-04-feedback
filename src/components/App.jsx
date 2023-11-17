import { FeedbaksWrapper } from './App.styled';
import { Section } from './section';
import { Statistics } from './statistiks';
import { FeedbackOptions } from './feedkack-options';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positive = total ? Math.round((good / total) * 100) : 0;

  const onLeaveFeedback = feedbackRate => {
    switch (feedbackRate) {
      case 'good':
        setGood(prevGood => (prevGood += 1));
        break;
      case 'neutral':
        setNeutral(prevNeutral => (prevNeutral += 1));
        break;
      case 'bad':
        setBad(prevBad => (prevBad += 1));
        break;
      default:
        break;
    }
  };

  return (
    <FeedbaksWrapper>
      <Section title={'Pleaseleave feebback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      </Section>
    </FeedbaksWrapper>
  );
};
