import React from 'react';
import Styled from 'styled-components';

const photoSizeSm = `2rem`;

const PhotoContainer = Styled.div`
  height: ${photoSizeSm};
  margin: auto;
  position:relative;
  width: ${photoSizeSm};
`;

const dotDiameter = `0.5rem`;

const NotificationDot = Styled.div`
  background-color: red;
  border-radius: 50%;
  height: ${dotDiameter};
  position: absolute;
  right: 0;
  top: 0;
  width: ${dotDiameter};
`;

const Photo = Styled.img`
  cursor: pointer;
  display: block;
  height: 100%;
  margin: auto;
  width: 100%;
`;

const Avatar = ({ userPhoto, hasUnreadNotification, onClick }) => {
  return (
    <PhotoContainer onClick={onClick}>
      <Photo src={userPhoto} alt="User avatar" />
      {hasUnreadNotification ? <NotificationDot /> : ''}
    </PhotoContainer>
  );
};

export default Avatar;
