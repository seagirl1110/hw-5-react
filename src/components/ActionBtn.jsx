import styles from './../styles/action_btn.module.css';

function ActionBtn({ btn, handleClick }) {
  const btnClassName = `${styles.btn} ${
    btn.selected ? `${styles.btn_selected}` : ''
  }`;
  const Img = btn.img;

  return (
    <button onClick={() => handleClick(btn.id)} className={btnClassName}>
      <Img />
    </button>
  );
}

export default ActionBtn;
