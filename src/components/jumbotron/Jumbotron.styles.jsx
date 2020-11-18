import styled from 'styled-components/macro';

export const Item = styled.div`
  dispay: flex;
  border-bottom: .5rem solid #222;
  padding: 10rem 5%;
  color: white;
  overflow: hidden;
`;

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
  @media (max-width: 1000px) {
    $(Item):last-of-type h2 {
      margin-bottom: 3rem;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 4.5rem;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: normal;
  line-height: 1.1;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    font-size: 3rem;
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
