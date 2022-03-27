import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ onLeaveFeedback, option}) => {
    return (
        <button
            className={s.Feedback__button}
            onClick={() => onLeaveFeedback(option)}>{option}
        </button>
    );
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    option: PropTypes.string.isRequired,
};

export default FeedbackOptions;