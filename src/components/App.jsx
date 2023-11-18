import { FeedbaksWrapper } from './App.styled';
import { Section } from './section';
import { Statistics } from './statistiks';
import { FeedbackOptions } from './feedkack-options';
import { useState } from 'react';

export const App = () => {
  const [data, setData] = useState({ good: 0, neutral: 0, bad: 0 });

  const { good, neutral, bad } = data;

  const total = good + neutral + bad;
  const positive = total ? Math.round((good / total) * 100) : 0;

  const onLeaveFeedback = option => {
    setData(prevData => ({ ...prevData, [option]: (prevData[option] += 1) }));
  };

  return (
    <FeedbaksWrapper>
      <Section title={'Pleaseleave feebback'}>
        <FeedbackOptions
          options={Object.keys(data)}
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
