import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../components/container';
import Hero from '../../components/hero';
import Listing from '../../components/listing';
import PaperCard from '../../components/paper-card';

const DetailsPage: React.FC = () => {
  const location = useLocation();
  const { university } = location.state || {};

  return (
    <Container>
      <Hero
        title="University Details"
        breadcrumb={[
          {
            label: 'Home',
            path: '/'
          },
          {
            label: 'Details',
          }
        ]}
      />

      {university ? (
        <PaperCard>
          <Listing
            name={university.name}
            country={university.country}
            code={university.alpha_two_code}
            website={university.web_pages[0]}
          />
        </PaperCard>
      ) : (
        <p>No university data available.</p>
      )}
    </Container>
  );
};

export default DetailsPage;
