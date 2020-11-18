import React from 'react';
import { JumbotronContainer, FooterContainer, FAQsContainer, HeaderContainer } from '../../containers';
import './Home.styles.scss';

const Homepage = () => {

  return (
    <section className="section-homepage">
      <HeaderContainer>
        <JumbotronContainer />
        <FAQsContainer />
        <FooterContainer />
      </HeaderContainer>
    </section>
  );
};

export default Homepage;
