import React from 'react';
import Styled from 'styled-components';

import Theme from '../modules/Theme';
import Media from '../modules/Media';

import TickIcon from '../images/tick-lg.svg';

const Container = Styled.div`
  min-width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const Panel = Styled.div`
  width: 80%;
  min-height: 30rem;
  background-color: white;
  box-shadow: 1px 1px 4px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  position: relative;
  &::before {
    content: " ";
    background-color: ${Theme.Blue};
    position: absolute;
    left: 0;
    width: 200%;
    height: 200%;
    z-index: 0;
    top: -120%;
    ${Media.desktop`
      transform: rotate(13deg);
    `}
    ${Media.phone`
      transform: rotate(257deg);
    `}
  }
`;

const PanelContent = Styled.div`
  position: relative;
  z-index: 1;
`;

const CallToAction = Styled.button`
  background-color: ${Theme.Green};
  border-radius: 0.2rem;
  border: 0;
  color: white;
  cursor: pointer;
  padding: 1rem 2rem;
`;

const Title = Styled.h1`
  color: white;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
const SubTopicContent = ({ index, title, completed, onButtonClick }) => {
  const Done = Styled.img`
    background-color: ${completed ? `${Theme.Green};` : 'transparent'};
    border-radius: 50%;
    margin-bottom: 4rem;
  `;
  return (
    <Container>
      <Panel>
        <PanelContent>
          <div className="row">
            <div className="col-xs-12 center-xs">
              <Title>{`${index}. ${title}`}</Title>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center-xs">
              <Done src={TickIcon} alt="check" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center-xs">
              <CallToAction onClick={() => onButtonClick(index)}>
                Let's go
              </CallToAction>
            </div>
          </div>
        </PanelContent>
      </Panel>
    </Container>
  );
};

export default SubTopicContent;
