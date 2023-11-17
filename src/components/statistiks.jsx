import styled from "styled-components";

const StatisticsCounter = styled.p``;

const NotificationMessage = styled.p``;


export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      {total === 0 ? (
        <NotificationMessage>There is no feedback</NotificationMessage>
      ) : (
        <div>
          <StatisticsCounter>good: {good}</StatisticsCounter>
          <StatisticsCounter>neutral: {neutral}</StatisticsCounter>
          <StatisticsCounter>bad: {bad}</StatisticsCounter>
          <StatisticsCounter>total: {total}</StatisticsCounter>
          <StatisticsCounter>positive feedback: {positive}%</StatisticsCounter>
        </div>
      )}
    </div>
  );
};