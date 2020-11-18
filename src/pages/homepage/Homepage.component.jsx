import React from 'react';
import Jumbotron from '../../components/jumbotron/Jumbotron.component';
import jumbotronData from '../../_assets/data/jumbotron';
import './Homepage.styles.scss';

const Homepage = () => {

  return (
    <section className="section-homepage">
      <Jumbotron.Container>
        {jumbotronData.map(({ id, title, subtitle, image, alt, direction }) => (
          <Jumbotron key={id.toString()} direction={direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{title}</Jumbotron.Title>
              <Jumbotron.Subtitle>{subtitle}</Jumbotron.Subtitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={image} alt={alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </section>
  );
};

export default Homepage;
