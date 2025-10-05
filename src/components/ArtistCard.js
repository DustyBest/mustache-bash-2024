import styles from './ArtistCard.module.css';

// Images of Artists
import ArtistImg01 from '../assets/bands/01_FrancMoody.jpg';
import ArtistImg02 from '../assets/bands/02_Moodymann.jpg';
import ArtistImg03 from '../assets/bands/03_HighFade.jpg';
import ArtistImg04 from '../assets/bands/04_YoungFranco.jpg';
import ArtistImg05 from '../assets/bands/05_NatashaDiggs.jpg';
import ArtistImg06 from '../assets/bands/06_FamilyBand.jpg';
import ArtistImg07 from '../assets/bands/07_NeverDull.jpg';
import ArtistImg08 from '../assets/bands/08_BSections.jpg';
import ArtistImg09 from '../assets/bands/09_3KelvesB2B.jpg';
import ArtistImg10 from '../assets/bands/10_Discotoshi.jpg';
import ArtistImg11 from '../assets/bands/11_DJDials.jpg';
import ArtistImg12 from '../assets/bands/12_AbbyNormal.jpg';
import ArtistImg13 from '../assets/bands/13_Groovewell.jpg';
import ArtistImg14 from '../assets/bands/14_He2She.jpg';
import ArtistImg15 from '../assets/bands/15_Voss&Things.jpg';
import ArtistImg16 from '../assets/bands/16_DJM3.jpg';
import ArtistImg17 from '../assets/bands/17_CoolSexyDJ.jpg';

// Icons to use for social links
import SoundcloudBlue from '../assets/artist_social_icons/soundcloud_blue.svg';
import SoundcloudBlack from '../assets/artist_social_icons/soundcloud_black.svg';
import SpotifyBlue from '../assets/artist_social_icons/spotify_blue.svg';
import SpotifyBlack from '../assets/artist_social_icons/spotify_black.svg';
import IGBlue from '../assets/artist_social_icons/ig_blue.svg';
import IGBlack from '../assets/artist_social_icons/ig_black.svg';
import YoutubeBlue from '../assets/artist_social_icons/youtube_blue.svg';
import YoutubeBlack from '../assets/artist_social_icons/youtube_black.svg';
import WWWBlue from '../assets/artist_social_icons/www_blue.svg';
import WWWBlack from '../assets/artist_social_icons/www_black.svg';

const iconMap = {
  soundcloud: { blue: SoundcloudBlue, black: SoundcloudBlack },
  spotify: { blue: SpotifyBlue, black: SpotifyBlack },
  ig: { blue: IGBlue, black: IGBlack },
  youtube: { blue: YoutubeBlue, black: YoutubeBlack },
  www: { blue: WWWBlue, black: WWWBlack },
};

const imageMap = { 
  "01_FrancMoody.jpg": ArtistImg01,
  "02_Moodymann.jpg": ArtistImg02,
  "03_HighFade.jpg": ArtistImg03,
  "04_YoungFranco.jpg": ArtistImg04,
  "05_NatashaDiggs.jpg": ArtistImg05,
  "06_FamilyBand.jpg": ArtistImg06,
  "07_NeverDull.jpg": ArtistImg07,
  "08_BSections.jpg": ArtistImg08,
  "09_3KelvesB2B.jpg": ArtistImg09,
  "10_Discotoshi.jpg": ArtistImg10,
  "11_DJDials.jpg": ArtistImg11,
  "12_AbbyNormal.jpg": ArtistImg12,
  "13_Groovewell.jpg": ArtistImg13,
  "14_He2She.jpg": ArtistImg14,
  "15_Voss&Things.jpg": ArtistImg15,
  "16_DJM3.jpg": ArtistImg16,
  "17_CoolSexyDJ.jpg": ArtistImg17,
};

export default function ArtistCard({ artist }) {
  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <img src={imageMap[artist.image]} alt={`${artist.name} promo shot`} />
        </div>
        <h4 className={`${styles.name} ${styles[artist.color]}`}>{artist.name}</h4>
        <p className={`${styles.copy} ${styles[artist.color]}`}>{artist.copy}</p>

        {artist.socials?.length > 0 && (
        <ul className={styles.socials}>
          {artist.socials.map((social, index) => (
            <li key={index}>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <img src={iconMap[social][artist.color]} alt={social} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
