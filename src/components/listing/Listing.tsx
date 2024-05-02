import React from 'react';
import styles from './Listing.module.css';

interface ListingProps {
  name: string;
  country: string;
  code: string;
  website: string;
}

const Listing: React.FC<ListingProps> = ({ name, country, code, website }) => {
  return (
    <div>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.country}>Country: {country}</p>
      <p className={styles.code}>Code: {code}</p>
      <a href={website} className={styles.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
    </div>
  );
};

export default Listing;
