import React from 'react';
import { JumbotronContainer, FooterContainer, FAQsContainer, HeaderContainer, OptFormContainer } from '../../containers';
import { Feature } from '../../components';
import './Home.styles.scss';

const Home = () => {
  return (
    <section className="section-homepage">
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV shows, and more.</Feature.Title>
          <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
          <OptFormContainer />
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </section>
  );
};

export default Home;
