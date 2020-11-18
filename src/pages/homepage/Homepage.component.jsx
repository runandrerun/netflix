import React from 'react';
import { JumbotronContainer, FooterContainer } from '../../containers';
import './Homepage.styles.scss';

const Homepage = () => {

  return (
    <section className="section-homepage">
      <JumbotronContainer />
      <FooterContainer />
    </section>
  );
};

export default Homepage;
