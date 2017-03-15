import React from 'react';
import Styled from 'styled-components';

import Theme from '../modules/Theme';

const Height = '2px';

const Bar = Styled.div`
  background-color: white;
  height: ${Height};
  left: 0;
  position: absolute;
  top: 50%;
  margin-top: -${Height};
  width: 100%;
  z-index: 1;
`;

const Progress = Styled.div`
  background-color: ${Theme.Green};
  height: ${Height};
  left: 0;
  position: absolute;
  top: 0;
`;
const TopicProgress = ({ progress }) => {
  return (
    <Bar>
      <Progress style={{ width: `${progress * 100}%` }} />
    </Bar>
  );
};

export default TopicProgress;
