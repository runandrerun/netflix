import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 4.4rem 3.5rem;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 4.4rem 1.9rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13.125rem, 1fr));
  grid-gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(9.4rem, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 1.25rem;
  font-size: .8rem;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 1rem;
  color: #757575;
  margin-bottom: 2.5rem;
`;

export const Text = styled.div`
  font-size: 1rem;
  color: #757575;
  margin-bottom: 2.5rem;
`;

export const Break = styled.br`
  flex-basis: 100%;
  height: 0;
`;
