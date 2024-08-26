import styles from './../styles/main.module.css';
import Title from './Title';
import Text from './Text';

function Main() {
  return (
    <main className={styles.main_container}>
      <Title />
      <Text />
    </main>
  );
}

export default Main;
