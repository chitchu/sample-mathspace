import React from 'react';
import Styled from 'styled-components';

import Theme from '../modules/Theme';

const Topic = ({ index, completed, active, onClick }) => {
  const diameter = 2;
  const border = `1px solid ${completed ? Theme.Green : 'white'}`;
  const Container = Styled.span`
    align-items: center;
    background-color: ${completed ? Theme.Green : Theme.Purple};
    border-radius: 50%;
    border: ${border};
    color: white;
    cursor: pointer;
    display: flex;
    height: ${diameter}rem;
    justify-content: center;
    margin: 0;
    position: relative;
    width: ${diameter}rem;
    z-index:2;
    ${active ? `
      &::before {
        content: " ";
        position: absolute;
        z-index: -1;
        border: ${border};
        border-radius: 50%;
        height: ${diameter + 0.5}rem;
        width: ${diameter + 0.5}rem;
      }
    ` : ''};
  `;
  return <Container onClick={evt => onClick(index)}>{index}</Container>;
};

export default Topic;
