import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({direction}) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`

`;

export const Pane = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: normal;
  line-height: normal;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 2.6rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2.6rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
