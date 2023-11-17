import { Component } from "react";
import { FeedbaksWrapper} from "./App.styled";
import { Section } from "./section";
import { Statistics } from "./statistiks";
import { FeedbackOptions } from "./feedkack-options";

export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (option) => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      }
    })
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positive = total ? Math.round((good / total) * 100) : 0;
    return (
      <FeedbaksWrapper>
        <Section title={"Pleaseleave feebback"}>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title={"Statistics"}>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positive={positive}/>
        </Section>
      </FeedbaksWrapper>
    )
  }
};
