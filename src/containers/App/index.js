import React, { Component } from 'react';
import './styles.scss';

import Card from '../../components/Card';

class App extends Component {
  renderCards() {
    if (!this.props.cats || this.props.cats.length <= 0) {
      return null
    }

    const cardNodes = this.props.cats.map((cat) => {
      return <Card cat={cat} />
    });

    return cardNodes;
  }

  render() {
    return (
      <div className="app">
        <header className='app__header'>
          Test Technique Meero
        </header>
        {this.renderCards()}
      </div>
    );
  }
}

export default App;
