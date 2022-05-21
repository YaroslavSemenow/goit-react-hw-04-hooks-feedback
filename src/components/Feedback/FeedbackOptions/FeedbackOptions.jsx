import style from './FeedbackOptions.module.css';

export default function FeedbackOptions() {
  return (
    <ul className={style.btn_list}>
      <li className={style.btn_item}>
        <button type="button" onClick={this.incrementGoodResponses}>
          Good
        </button>
      </li>
      <li className={style.btn_item}>
        <button type="button" onClick={this.incrementNeutralResponses}>
          Neutral
        </button>
      </li>
      <li className={style.btn_item}>
        <button type="button" onClick={this.incrementBadResponses}>
          Bad
        </button>
      </li>
    </ul>
  );
}
