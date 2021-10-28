import { useState } from 'react';
import styled from '@emotion/styled';
import { pikachu } from '../../utils/assets';
import StartModal from './Modal';

const Button = styled.button`
  border: 4px solid black;
  padding: 8px 16px;
  position: relative;
  background-color: transparent;
  z-index: 0;
  span {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 4px;
  }
  &:after {
    position: absolute;
    top: 10px;
    left: 10px;
    height: 100%;
    width: 100%;
    background-color: #ffea00;
    content: "";
    z-index: -1;
    transition: transform 0.2s ease-in, width 0.2s ease-out 0.2s;
  }
  &:hover {
    &:after {
      transform: translate(-10px, -10px);
      width: calc(100% - 10px);
    }
  }
  &:active {
    &:after {
      width: 100%;
    }
  }
`;

const HomeContainer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-container">
      <div className="home-landing">
        <img src={pikachu} alt="logo collection" />
        <h1>Pokemon Collection</h1>
        <Button onClick={() => setOpen(true)}><span>Get Started</span></Button>
      </div>
      <StartModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default HomeContainer;
