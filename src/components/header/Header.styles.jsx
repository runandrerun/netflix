import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url(${({ src }) => src ? require(`../../_assets/img/misc/${src}.jpg`) : require(`../../_assets/img/misc/home-bg.jpg`)})
  top left / cover no-repeat;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  width: 108px;
  height: 32px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    width: 167px;
    height: 45px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  max-width: 84px;
  line-height: normal;
  color: white;
  border: none;
  font-size: 1rem;
  border-radius: 3px;
  padding: 8px 10px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f40612;
  }
`;
