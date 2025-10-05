import styles from './Lineup.module.css';
import LineUpImg from '../assets/lineup.jpg';
import LineUpMobileImg from '../assets/lineup_mobile.jpg';

export default function Lineup() {
  return (
    <section className={styles.lineup}>
      <img src={LineUpImg} alt="Festival Lineup List" className={styles.lineupImage} />
      <img src={LineUpMobileImg} alt="Festival Lineup List" className={styles.lineupImageMobile} />
    </section>
  );
}