import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import Logo from '../assets/logo.svg';
import NavIGIcon from '../assets/nav_ig_icon.svg';
import NavFBIcon from '../assets/nav_fb_icon.svg';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [menuOpen]);

  // close menu with ESC button
  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, setMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>

          {/* Mustache Bash Logo */}
          <div className={styles.logo}>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={Logo} alt="Mustache Bash Logo" />
            </a>
          </div>

          <div className={styles.dateCallout}>
            <p>Upcoming Bash</p>
            <p>In San Diego</p>
            <p>March 23, 2024</p>
          </div>

          {/* Tickets CTA that we'll remove on small devices */}
          <div className={styles.ticketsMobile}>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">Tickets Soon</a>
          </div>

          {/* Hamburger Menu */}
          <div id="menu-icon" 
            className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Main Nav Links */}
          <nav className={`${styles.navRight} ${menuOpen ? styles.open : ''}`}>
            <ul>
              <li><a href="https://google.com" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}>San Diego</a></li>
              <li><a href="https://google.com" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}>San Francisco</a></li>
              <li><a href="https://google.com" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}>Gallery</a></li>
              <li><a href="https://google.com" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}>Info</a></li>
              <li className={styles.ticketsNav}><a href="https://google.com" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}>Tickets Soon</a></li>
              <li className={styles.social}>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}>
                  <img src={NavFBIcon} alt="Facebook Logo" />
                </a>
              </li>
              <li className={styles.social}>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}>
                  <img src={NavIGIcon} alt="Instagram Logo" />
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}
