import React from 'react';
import styles from './TopDestinations.module.css';

const destinations = [
  { name: 'Venice', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fd850905b1388107714c82e0761b090d7bb982c4863d4c70529e5fa1e65b9124?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4', rating: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9bfe0e06175e687992a08b98f4480abc4e51c6833067026a992a2d45573a0392?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4' },
  { name: 'Amsterdam', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/691b91ae0a143f1ce3254d111f80beb3654ab9ee7767765b194f16d0e397b416?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4', rating: 'https://cdn.builder.io/api/v1/image/assets/TEMP/451c51acf33acb375fd0562a1b6699c5b526afff9a93ce2f69cac4f3b51ad3ad?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4' },
  { name: 'Budapest', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/219f676345ba05225b9a0e9f2f8efaf5b003656df3fc81f456457687b413fb8c?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4', rating: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2d7b20373572c32cd8f9c4526c827c8a34cc274d7127f7a62136f7b66762f8a2?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4' },
  { name: 'Lisbon', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7a2ed0e997de4652f2640ce0bf916afe69fb2cd092655ea86682b7b59ee9878e?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4', rating: 'https://cdn.builder.io/api/v1/image/assets/TEMP/95d363bd6be174966c4f7fc73884e06c77cc63c0be9420a91e56c6bcfabb673f?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4' },
  { name: 'London', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/24f8be4b4435435b147d42e27a6ddcc09efc41e9d8aab5f3f1c4efc2f249c4eb?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4', rating: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7490a64aff411300456039fc170a54c4be3101ed6c695d38ffb6e71bb3ac889a?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4' },
  { name: 'Ottawa', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6e678276a91e6466a5b5a04eaf3cd64a9a40a32fa1b3a3a18f5ab5c79c6b27c7?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4', rating: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d5a64350af4f46211c12412414b0e18e4fd344a373c96d977fde4571838a70bc?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4' },
  { name: 'Paris', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3fa1d7c0fcd62d91ba88355ad23896fd5707ead64e541856f241eab858062916?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4', rating: 'https://cdn.builder.io/api/v1/image/assets/TEMP/544f140be9e0edcda38748a6e6b667222389a64d284154cec95f0a34ced1fb00?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4' },
  { name: 'Rome', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e65d9bbff22b86a68ab1718ddc947ce6602bf038221e27a5a6d9a09a9fa8a637?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4', rating: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a22f0bdc40d4231ddaceb4265f577e231c6ac94aa217dfdbf048acf16b496e0?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4' },
];

const TopDestinations = () => {
  return (
    <section className={styles.topDestinations}>
      <h2 className={styles.sectionTitle}>Top Searched Destinations</h2>
      <p className={styles.sectionDescription}>Favorite destinations of professional tourists</p>
      <div className={styles.destinationGrid}>
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </section>
  );
};

const DestinationCard = ({ name, image, rating }) => {
  return (
    <div className={styles.destinationCard}>
      <img src={image} alt={name} className={styles.destinationImage} />
      <div className={styles.destinationInfo}>
        <h3 className={styles.destinationName}>{name}</h3>
        <img src={rating} alt="Rating" className={styles.ratingImage} />
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9db75e042a4f9e10fd2fe50d989a150636035ccd9d76abd94227f4d341733389?placeholderIfAbsent=true&apiKey=b412b21fb2e94c75aa55edbd24569de4" alt="" className={styles.arrowIcon} />
    </div>
  );
};

export default TopDestinations;