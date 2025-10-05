import styles from './Glasses.module.css';
import GlassesImg from '../assets/glasses.jpg';

export default function Glasses() {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <div className={styles.image_container}>
                <img src={GlassesImg} alt="Mustached man with aviator sunglasses" className={styles.tvimage} />
            </div>
            <div className={styles.copy_container}>
                <h2 className={styles.heading}>Cloud bread everyday carry ugh, hexagon occupy celiac yuccie.</h2>
                <p className={styles.copy}>YOLO pabst cronut slow-carb kale chips intelligentsia. Letterpress lo-fi same vaporware ugh, 
                    live-edge neutra pinterest selvage tofu jean shorts synth occupy green juice marfa. Gentrify hammock cronut biodiesel
                     narwhal food truck kinfolk gatekeep schlitz photo booth chartreuse migas. Raw denim pickled occupy, jawn neutra same
                      mlkshk literally roof party kogi. Kombucha hella offal thundercats, activated charcoal YOLO hammock deep v banh mi 
                      fashion axe listicle.</p>
                <a className={styles.link} href="https://google.com" target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
            </div>
        </div>
    </section>
  )
}
