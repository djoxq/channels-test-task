import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../components/container';
import Hero from '../../components/hero';

const DetailsPage: React.FC = () => {
  const location = useLocation();
  const { university } = location.state || {};

  return (
    <Container>
      <Hero title="University Details" />
      {university ? (
        <div>
          <h2>{university.name}</h2>
          <p><strong>Country:</strong> {university.country}</p>
          <p><strong>Code:</strong> {university.alpha_two_code}</p>
          <p><strong>Website:</strong> <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">{university.web_pages[0]}</a></p>
        </div>
      ) : (
        <p>No university data available.</p>
      )}
    </Container>
  );
};

export default DetailsPage;
