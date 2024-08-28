import styles from './../styles/main.module.css';
import Title from './Title';
import Text from './Text';
import Actions from './Actions';

function Main() {
  return (
    <main className={styles.main_container}>
      <Title />
      <Text />
      <Actions />
    </main>
  );
}

export default Main;
