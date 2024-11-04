import React from 'react';
import styles from './FeaturedTours.module.css';

const tours = [
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ed1c3aa6aa12eaa3a978de1c092e6d08fafd41239ac9889444f8736dd3c12b00?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4',
    label: 'Top Rated',
    rating: '4.96',
    reviews: 672,
    title: 'California Sunset/Twilight Boat Cruise',
    duration: '2 days 3 nights',
    price: 48.25,
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ef93b7c3afc5ad1bb4064be9e81914fb86a7088788ca467804102058eda4fc4e?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4',
    label: 'Best Sale',
    rating: '4.96',
    reviews: 672,
    title: 'NYC: Food Tastings and Culture Tour',
    duration: '3 days 3 nights',
    price: 17.32,
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/397f4c7698cf310e4fe3184cec8b74c155f45a73e9c040c734226648bcdb51ea?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4',
    label: '25% Off',
    rating: '4.96',
    reviews: 672,
    title: 'Grand Canyon Horseshoe Bend 2 days',
    duration: '7 days 6 nights',
    price: 15.63,
  },
];

const FeaturedTours = () => {
  return (
    <section className={styles.featuredTours}>
      <div className={styles.sectionHeader}>
        <div>
          <h2 className={styles.sectionTitle}>Our Featured Tours</h2>
          <p className={styles.sectionDescription}>Favorite destinations based on customer reviews</p>
        </div>
        <div className={styles.filterButtons}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ef215cf3550419ce5627a876e128744a2d7ab521140a23fff13221add1d7b3e?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="Filter 1" className={styles.filterButton} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6113a9c49712cd697e012f4875ff79adfd0756593bc796964aa6df9ad51f6c8f?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="Filter 2" className={styles.filterButton} />
          <button className={styles.reviewButton}>
            Review / Rating
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cb499f980dbfda00bd27c2d0ee6c7f2da9eb999f410b00e1448df797c32a2dc?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.dropdownIcon} />
          </button>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6470019e43f8147ab5c91bef787195761903977c04e86a3630e931b76210587?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="Filter 3" className={styles.filterButton} />
        </div>
      </div>
      <div className={styles.tourGrid}>
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </section>
  );
};

const TourCard = ({ image, label, rating, reviews, title, duration, price }) => {
  return (
    <div className={styles.tourCard}>
      <div className={styles.tourImageWrapper}>
        <img src={image} alt={title} className={styles.tourImage} />
        <span className={styles.tourLabel}>{label}</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/68a5ad70ddf300b729b52d3ef67db83f27de9554e097c54f6a52ee7f01275e58?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.heartIcon} />
      </div>
      <div className={styles.tourInfo}>
        <div className={styles.ratingWrapper}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7e0c52e1f1583b50fcc1a7855e90de7aa702a4b985522a14b64c51e97080f0d?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.starIcon} />
          <span className={styles.rating}>{rating}</span>
          <span className={styles.reviews}>({reviews} reviews)</span>
        </div>
        <h3 className={styles.tourTitle}>{title}</h3>
        <div className={styles.tourDetails}>
          <span className={styles.duration}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e40a004eca43beb8b12948a32b39e667d71eaebb26e8650564cbd09a64fb7b?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.durationIcon} />
            {duration}
          </span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c36385f66238ffb2bf4544534c837644f99a8bb23f28161b7ad2423c3ab3ed3b?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.locationIcon} />
        </div>
        <div className={styles.tourFooter}>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>${price.toFixed(2)}</span>
            <span className={styles.perPerson}>/ person</span>
          </div>
          <button className={styles.bookNowButton}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTours;