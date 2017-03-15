import React from 'react';
import Styled from 'styled-components';

const FooterMenu = ({ icon, isActive }) => {
  const Container = Styled.div`
    position: relative;
    padding: 1rem 0 1rem;
    ${isActive ? `
      &::before {
        background-color: white;
        bottom: 4px;
        content: " ";
        height: 5px;
        left: 0;
        position: absolute;
        width: 100%;
      }
      ` : ''}
  `;
  return (
    <Container>
      <img src={icon} alt="icon" />
    </Container>
  );
};

export default FooterMenu;
