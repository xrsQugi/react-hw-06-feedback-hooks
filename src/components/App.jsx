import React, {  useState } from "react";
import Statistics from './Statistics/Statistics';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Section from "./Section/Section";
import Notification from './Notification/Notification';
import css from './App.module.css';

// export default function App () {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const feedbackOptionsArr = [
//     {
//       id: 1,
//       name: 'good',
//       action: () => setGood(good => good + 1),
//     },
//     {
//       id: 2,
//       name: 'neutral',
//       action: () => setNeutral(neutral => neutral + 1),
//     },
//     {
//       id: 3,
//       name: 'bad',
//       action: () => setBad(bad => bad + 1),
//     },
//   ];

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   }

//   const countPositiveFeedbackPercentage = () => {
//     return (Math.round(good / countTotalFeedback() * 100));
//   }

//   return (
//           <div className={css.feedback}>
//             <Section title="Please leave feedback">
//               <FeedbackOptions options={feedbackOptionsArr}/>
//             </Section>
//             <Section title="Statistic">
//               {countTotalFeedback() ? (
//                 <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
//                 ) : (
//                 <Notification notify='There is no feedback'/>
//               )}
//             </Section>
//           </div>
//         )
// }

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  function countTotalFeedback() {
    return good + bad + neutral;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((100 * good) / countTotalFeedback());
  }

  const clickHandler = (e) => {
    switch (e.target.name) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }
  };

  return (
    <div className={css.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={['good', 'neutral', 'bad']}
          leaveFeedback={clickHandler} 
        />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification notify='There is no feedback'/>
        )}
      </Section>
    </div>
  );
}