import React from 'react';
import styles from './Hero.module.css';
import Breadcrumb, { BreadcrumbItem } from '../breadcrumb';

interface HeroProps {
  title: string;
  breadcrumb: BreadcrumbItem[]
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className={styles.hero}>
      <Breadcrumb items={props.breadcrumb} />
      <h1>{props.title}</h1>
    </div>
  );
};

export default Hero;
