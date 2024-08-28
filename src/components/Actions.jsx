import { useState } from 'react';
import styles from './../styles/actions.module.css';
import ActionBtn from './ActionBtn';

import { ReactComponent as apple } from './../assets/apple.svg';
import { ReactComponent as google } from './../assets/google.svg';
import { ReactComponent as x } from './../assets/x.svg';

function Actions() {
  const [btnColl, setBtnColl] = useState([
    { id: 1, img: apple, name: 'apple', selected: false },
    { id: 2, img: google, name: 'google', selected: false },
    { id: 3, img: x, name: 'x', selected: false },
  ]);

  function selectedBtn(btnID) {
    const newBtnColl = btnColl.map((btn) => {
      if (btn.id === btnID) {
        btn.selected = true;
      } else {
        btn.selected = false;
      }
      return btn;
    });
    setBtnColl(newBtnColl);
  }

  return (
    <div className={styles.actions_container}>
      {btnColl.map((btn) => (
        <ActionBtn btn={btn} handleClick={selectedBtn} key={btn.id} />
      ))}
    </div>
  );
}

export default Actions;
