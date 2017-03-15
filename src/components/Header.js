import React from 'react';
import Styled from 'styled-components';

import SubTopics from './SubTopics';
import Title from './Title';
import Theme from '../modules/Theme';

const Container = Styled.div`
  position: relative;
  background-color: ${Theme.Pink};
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
`;

const Header = (
  {
    title,
    photo,
    hasUnreadNotification,
    topics,
    activeTopic,
    onUserPhotoClick,
    onChangeTopic
  }
) =>
  {
    return (
      <Container>
        <Title
          label={title}
          userPhoto={photo}
          hasUnreadNotification={hasUnreadNotification}
          handleUserPhotoClick={onUserPhotoClick}
        />
        <SubTopics
          topics={topics}
          active={activeTopic}
          onTopicClick={onChangeTopic}
        />
      </Container>
    );
  };
export default Header;
