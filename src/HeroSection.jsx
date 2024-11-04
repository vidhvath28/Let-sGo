import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.exploreTag}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1205fc719bf97c6d00705eb280a4e33192ef7ae34c3b88bb14690764f8752c94?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.exploreIcon} />
          <span>Explore the World</span>
        </div>
        <h1 className={styles.heroTitle}>Your Gateway to Extraordinary Adventures</h1>
        <p className={styles.heroDescription}>
          Pack your bags and let Travila redefine your travel experience. Where
          every journey is a story waiting to be told
        </p>
      </div>
      <SearchForm />
    </section>
  );
};

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <div className={styles.formTabs}>
        <button type="button" className={styles.activeTab}>Tours</button>
        <button type="button">Hotels</button>
        <button type="button">Tickets</button>
        <button type="button">Rental</button>
        <button type="button">Activities</button>
      </div>
      <div className={styles.formFields}>
        <FormField label="Location" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/dca4084b315f62b66a4f9c5ae9286a0f6674b22a19c3e1926d797d5f761b1d77?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" placeholder="New York, USA" />
        <FormField label="Check In" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6f21c26413e93e5577c078c40188d554200e379b64846a855b7811a9bdefc10e?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" placeholder="02 January 2024" />
        <FormField label="Check Out" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b46f8cb0f6a98db9bc93c7732eca5e82fb1c48e06acc8184a28eaecc84acdc1b?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" placeholder="02 January 2024" />
        <FormField label="Guest" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1e54dd167b4eed692530f907d118df7cb231de79654a2ed9534e974e30cece85?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" placeholder="2 adults, 2 children" />
      </div>
      <button type="submit" className={styles.searchButton}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8dbd159d280785e868d4f2f1abfa9e909f788f95252c374db09532cdade0b6d?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.searchIcon} />
        Search
      </button>
    </form>
  );
};

const FormField = ({ label, icon, placeholder }) => {
  return (
    <div className={styles.formField}>
      <label className={styles.fieldLabel}>{label}</label>
      <div className={styles.fieldInput}>
        <img src={icon} alt="" className={styles.fieldIcon} />
        <input type="text" placeholder={placeholder} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/435f0e5c38afb378647fd48348a29838a0beac30ad12e9528faf5d6c31ae06d9?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.dropdownIcon} />
      </div>
    </div>
  );
};

export default HeroSection;