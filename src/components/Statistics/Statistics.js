import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={s.FeedbackList}>
        <li key="good" className={s.FeedbackList__item}>
          <p className={s.Feedback__text}>Good</p>
          <p>{good}</p>
        </li>
        <li key="neutral" className={s.FeedbackList__item}>
          <p className={s.Feedback__text}>Neutral</p>
          <p>{neutral}</p>
        </li>
        <li key="bad" className={s.FeedbackList__item}>
          <p className={s.Feedback__text}>Bad</p>
          <p>{bad}</p>
        </li>
      </ul>
      <p className={s.total}>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
