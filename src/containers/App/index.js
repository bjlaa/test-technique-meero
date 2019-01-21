import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from "react-router-dom";

import './styles.scss';
import { fetchCats } from '../../actions/actions'
import Card from '../../components/Card';

class App extends Component {
  componentWillMount() {
    this.props.fetchCats();
  }

  renderCards() {
    if (!this.props.cats || this.props.cats.length <= 0) {
      return null
    }

    const cardNodes = this.props.cats.map((cat, index) => {
      return <Card key={`${cat.toString()}+${index}`} cat={cat} />
    });

    return cardNodes;
  }

  render() {
    console.log(this.props.cats, 'ctas')
    return (
      <div className="app">
        <header className='app__header'>
          Test Technique Meero
        </header>
        {this.renderCards()}
        <Route
          path='/modal'
        />
      </div>
    );
  }
}

const mapDispatchToProps = (state) => {
  return {
    cats: state.mainReducer.cats
  }
}

export default connect(mapDispatchToProps, { fetchCats })(App);
