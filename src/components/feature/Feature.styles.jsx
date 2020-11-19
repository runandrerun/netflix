import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: .5rem solid #222;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 600;
  margin: auto;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Subtitle = styled.h2`
  color: white;
  max-width: 640px;
  font-size: 26px;
  font-weight: 500;
  margin: 1rem auto;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
