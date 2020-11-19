import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: .5rem solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 4.375rem 2.81rem;
  flex-direction: column;
  max-width: 50.9rem;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.18rem;
  }
`;

export const Item = styled.div`
  color: white;
  margin-bottom: .8rem;
  max-width: 700px;
  margin: auto;
  width: 100%;

  &:first-of-type {
    margin-top: 3rem;
  }
`;

export const Header = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.625rem;
  margin-bottom: 1px;
  font-weight: normal;
  background: #303030;
  padding: 0.8rem 1.2rem;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 1.5rem;

    @media (max-width: 600px) {
      width: 1rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Body = styled.p`
  max-width: 700px;
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8rem 2.2rem;
  margin-bottom: 1px;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }

`;
