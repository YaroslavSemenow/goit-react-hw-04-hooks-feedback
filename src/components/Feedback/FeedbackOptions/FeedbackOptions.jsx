import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={style.options__list}>
      <li className={style.options__item}>
        <button
          className={style.options__btn}
          type="button"
          onClick={onLeaveFeedback[0]}
        >
          {options[0]}
        </button>
      </li>
      <li className={style.options__item}>
        <button
          className={style.options__btn}
          type="button"
          onClick={onLeaveFeedback[1]}
        >
          {options[1]}
        </button>
      </li>
      <li className={style.options__item}>
        <button
          className={style.options__btn}
          type="button"
          onClick={onLeaveFeedback[2]}
        >
          {options[2]}
        </button>
      </li>
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};
