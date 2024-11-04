import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import TopDestinations from './TopDestinations';
import FeaturedTours from './FeaturedTours';
import styles from './TravelApp.module.css';

const TravelApp = () => {
  return (
    <div className={styles.travelApp}>
      <Header />
      <main>
        <HeroSection />
        <TopDestinations />
        <FeaturedTours />
      </main>
    </div>
  );
};

export default TravelApp;