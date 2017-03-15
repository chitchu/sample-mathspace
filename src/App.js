import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  state = {
    title: '',
    user: { photo: 'images/avatar@2x.png', hasUnreadNotification: true },
    subtopics: []
  };

  componentDidMount() {
    fetch(`data.json`)
      .then(response => response.json())
      .then(({ topic, subtopics }) => {
        const activeTopic = subtopics.reduce(
          (current, next) => next.completed ? next.index : current,
          0
        );
        this.setState(prevState => ({
          ...prevState,
          title: topic.title,
          subtopics,
          activeTopic
        }));
      })
      .catch(err => {
        //an error has occured
      });
  }

  handleChangeTopic = target => {
    this.setState({ activeTopic: target });
  };

  handleUserPhotoClick = evt => {
    // handle user photo click
  };

  handleMarkTopicDone = target => {
    this.setState(prevState => {
      const subtopics = prevState.subtopics.map(topic => ({
        ...topic,
        completed: topic.index === target || topic.completed
      }));
      return { ...prevState, subtopics };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header
              title={this.state.title}
              photo={this.state.user.photo}
              hasUnreadNotification={this.state.user.hasUnreadNotification}
              topics={this.state.subtopics}
              activeTopic={this.state.activeTopic}
              onUserPhotoClick={this.handleUserPhotoClick}
              onChangeTopic={this.handleChangeTopic}
            />
            <Content
              topics={this.state.subtopics}
              activeTopic={this.state.activeTopic}
              onMarkTopicDone={this.handleMarkTopicDone}
            />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
