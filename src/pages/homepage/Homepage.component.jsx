import React from 'react';
import { JumbotronContainer, FooterContainer, FAQsContainer } from '../../containers';
import './Homepage.styles.scss';

const Homepage = () => {

  return (
    <section className="section-homepage">
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </section>
  );
};

export default Homepage;
