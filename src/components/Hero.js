import styles from './Hero.module.css';
import HeroImg from '../assets/hero.jpg';
import HeroMobileImg from '../assets/hero_mobile.jpg';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src={HeroImg} alt="Mustache Bash Show Flyer" className={styles.heroImage} />
      <img src={HeroMobileImg} alt="Mustache Bash Show Flyer Mobile" className={styles.heroImageMobile} />
    </section>
  );
}
