import React from 'react';
import { Jumbotron } from '../../components';
import jumbotronData from '../../_assets/data/jumbotron';

export default function JumbotronContainer() {
  return (
      <Jumbotron.Container>
        {jumbotronData.map(({ id, title, subTitle, image, alt, direction }) => (
          <Jumbotron key={id.toString()} direction={direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{title}</Jumbotron.Title>
              <Jumbotron.Subtitle>{subTitle}</Jumbotron.Subtitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={require(`../../_assets/${image}`)} alt={alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
  );
};
