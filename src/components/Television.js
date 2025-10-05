import styles from './Television.module.css';
import TVImg from '../assets/television.jpg';

export default function Television() {
  return (
    <section>
        <div className={styles.container}>
            <h3 className={styles.copy}>We're still flying high on 2023 leftovers. Click the tube to relive some action from last year.</h3>
            <div className={styles.image_container}>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    <img src={TVImg} alt="Old TV with YouTube play button" className={styles.tvimage} />
                </a>
                <a className={styles.youtube} href="https://google.com" target="_blank" rel="noopener noreferrer">View More On Youtube</a>
            </div>
        </div>
    </section>
  )
}
