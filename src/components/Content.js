import React from 'react';
import Styled from 'styled-components';

import SubTopicContent from './SubTopicContent';

const Container = Styled.div`
  display: flex;
  flex-wrap: nowrap;
  min-width: 0;
  white-space: nowrap;
`;

const Overflow = Styled.div`
  height: 100%;
  overflow: auto;
  position: relative;
`;

const Content = ({ topics, activeTopic, onMarkTopicDone }) => {
  return (
    <Overflow>
      <Container>
        {topics
          .filter(topic => topic.index === activeTopic)
          .map((topic, index) => (
            <SubTopicContent
              key={index}
              title={topic.title}
              index={topic.index}
              completed={topic.completed}
              onButtonClick={onMarkTopicDone}
            />
          ))}
      </Container>
    </Overflow>
  );
};

export default Content;
