import PropTypes from 'prop-types';
import s from './Statistics.module.css'
import initialFeedback from '../feedback.json';

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>

            <ul className={s.FeedbackList}>
                {initialFeedback.map(({ id, option }) => (
                    <li key={id} className={s.FeedbackList__item}>
                        <p className={s.Feedback__text}>{option}</p>
                        <p>
                            {(option === 'Good') && good}
                            {(option === 'Neutral') && neutral}
                            {(option === 'Bad') && bad}
                        </p>
                    </li>
                ))}
            </ul>
            <p className={s.total}>Total: {total}</p>
            <p>Positive Feedback: {positivePercentage}%</p>
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.any.isRequired,
};

export default Statistics;