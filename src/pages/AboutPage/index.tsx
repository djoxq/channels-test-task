import React from 'react';
import Container from '../../components/container';
import Hero from '../../components/hero';
import PaperCard from '../../components/paper-card/PaperCard.tsx';

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Hero
        title="About"
        breadcrumb={[
          {
            label: 'Home',
            path: '/'
          },
          {
            label: 'About',
            path: ''
          }
        ]}
      />
      <PaperCard>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
          lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
          ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
        </p>
        <p>
          Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam
          nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in,
          pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras
          vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu
          enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris
          sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
        </p>
      </PaperCard>
    </Container>
  );
};

export default AboutPage;
