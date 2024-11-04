import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <span className={styles.phone}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f806a0b007bfa89929faca1ce2d7a8823b8c05f1cfa1ba0f1a64db0caae467b1?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.icon} />
            +1 222-555-33-99
          </span>
          <span className={styles.email}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9840ab4abd49425ae4f075a4933d9dfc81b69cdc550551bca480bd38a5eb084a?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.icon} />
            support@travila.com
          </span>
        </div>
        <div className={styles.promoBar}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4fb6eff873f70bb91194ddae4e452bf94cecefc804c73487d14b2d2c6bbca78?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.icon} />
          <p className={styles.promoText}>
            Unlock the Magic of Travel with Travila - Your Gateway to Extraordinary Experiences
          </p>
          <span className={styles.ctaText}>
            Get This Now <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e647dc32b13d0e969c7ab63a15a90e3acbd14c59ec36d05d625141349a411a?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.icon} />
          </span>
        </div>
        <div className={styles.socialIcons}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac6e5a13c7fc7d4f47d46ccc19b37c9321e851d4581a488a4b8903ccafbbb757?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="Social Icon 1" className={styles.socialIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ee41b2f13f635aae29c4716d7cc4a41a653f5ad495607808b542e9151169716?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="Social Icon 2" className={styles.socialIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3c0732c9af22a56fef16720d554374273ff6d06de5af0595382e187f90da28b?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="Social Icon 3" className={styles.socialIcon} />
        </div>
      </div>
      <nav className={styles.mainNav}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ed13ea7044493ce36696b04108a95546ae8d64f17023462d18b418aaca305c7?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="Travila Logo" className={styles.logo} />
        <ul className={styles.navLinks}>
          <NavItem text="Home" />
          <NavItem text="Tours" />
          <NavItem text="Destinations" />
          <NavItem text="Activities" />
          <NavItem text="Hotel" />
          <NavItem text="Rental" />
          <NavItem text="Tickets" />
          <NavItem text="Pages" />
          <NavItem text="Blog" />
          <NavItem text="Contact" />
        </ul>
        <div className={styles.ctaButton}>
          <a href="#" className={styles.becomeExpert}>Become Local Expert</a>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7db5fee67db99625914c98befb619817556ea3719f5bb82440271bd7a86be801?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.expertIcon} />
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ text }) => (
  <li className={styles.navItem}>
    {text}
    <img src={`http://b.io/ext_${9 + ['Home', 'Tours', 'Destinations', 'Activities', 'Hotel', 'Rental', 'Tickets', 'Pages', 'Blog'].indexOf(text)}-`} alt="" className={styles.navIcon} />
  </li>
);

export default Header;