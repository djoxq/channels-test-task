import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className={styles.hero}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Hero;
