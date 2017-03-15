import React from 'react';
import Styled from 'styled-components';

import Avatar from './Avatar';
import Menu from '../images/menu.svg';

const Label = Styled.h1`
  font-size: 1rem;
  color: white;
`;

const Title = (
  { label, userPhoto, hasUnreadNotification, handleUserPhotoClick }
) =>
  {
    return (
      <div className="row middle-xs">
        <div className="col-xs-2 center-xs">
          <img src={Menu} alt="Menu" />
        </div>
        <div className="col-xs-8 center-xs">
          <Label>{label}</Label>
        </div>
        <div className="col-xs-2 center-xs">
          <Avatar
            userPhoto={userPhoto}
            hasUnreadNotification={hasUnreadNotification}
            onClick={handleUserPhotoClick}
          />
        </div>
      </div>
    );
  };
export default Title;
