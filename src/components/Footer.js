import React from 'react';
import Styled from 'styled-components';

import Theme from '../modules/Theme';
import FooterMenu from './FooterMenu';

import tick from '../images/tick.svg';
import pieChart from '../images/pie-chart.svg';
import graph from '../images/graph.svg';

const Footer = () => {
  const Container = Styled.div`
    background-color: ${Theme.Purple};
    bottom: 0;
    position: fixed;
    width: 100%;
  `;

  return (
    <Container className="row middle-xs">
      <div className="col-xs-4 center-xs">
        <FooterMenu icon={tick} isActive={true} />
      </div>
      <div className="col-xs-4 center-xs">
        <FooterMenu icon={pieChart} />
      </div>
      <div className="col-xs-4 center-xs">
        <FooterMenu icon={graph} />
      </div>
    </Container>
  );
};

export default Footer;
