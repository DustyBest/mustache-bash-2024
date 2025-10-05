import styles from './Artists.module.css';
import artists from '../data/artists';
import ArtistCard from './ArtistCard';

export default function Artists() {
  return (
    <section className={styles.artists}>
        <div className={styles.container}>
            <h4 className={styles.header}>Featuring 4 stages with live performances by:</h4>
            <div className={styles.cards}>
                {artists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                ))}
            </div>
        </div>
    </section>
  )
}
