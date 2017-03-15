import React, { Component } from 'react';
import Styled from 'styled-components';

import Topic from './Topic';
import TopicProgress from './TopicProgress';

import chevronLeft from '../images/chevron-left.svg';
import chevronRight from '../images/chevron-right.svg';

const TopicsContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ChevronLinks = Styled.a`
  cursor: pointer;
`;

class SubTopics extends Component {
  state = { viewable: 6, currentPage: 0 };

  handlePrevClick = () => {
    this.setState(prevState => ({
      ...prevState,
      currentPage: Math.max(0, (--prevState.currentPage))
    }));
  };

  handleNextClick = () => {
    this.setState((prevState, { topics }) => ({
      ...prevState,
      currentPage: Math.min(
        Math.ceil(topics.length / prevState.viewable) - 1,
        (++prevState.currentPage)
      )
    }));
  };
  render() {
    return (
      <div className="row middle-xs">
        <div className="col-xs-2 center-xs">
          <ChevronLinks onClick={this.handlePrevClick}>
            <img src={chevronLeft} alt="chevron left" />
          </ChevronLinks>
        </div>
        <div className="col-xs-8">
          <TopicsContainer>
            {this.props.topics
              .filter(
                (topic, index) =>
                  index >= this.state.viewable * this.state.currentPage &&
                    index - this.state.viewable * this.state.currentPage <
                      this.state.viewable &&
                    index + 1 >= this.state.currentPage
              )
              .map((topic, index) => (
                <Topic
                  key={index}
                  index={topic.index}
                  completed={topic.completed}
                  active={this.props.active === topic.index}
                  onClick={this.props.onTopicClick}
                />
              ))}
            <TopicProgress
              progress={
                this.props.topics.reduce(
                  (current, next) => next.completed ? next.index : current,
                  0
                ) /
                  this.props.topics.length
              }
            />
          </TopicsContainer>
        </div>
        <div className="col-xs-2 center-xs">
          <ChevronLinks onClick={this.handleNextClick}>
            <img src={chevronRight} alt="chevron right" />
          </ChevronLinks>
        </div>
      </div>
    );
  }
}

export default SubTopics;
