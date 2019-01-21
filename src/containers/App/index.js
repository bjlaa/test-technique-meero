import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from "react-router-dom";

import './styles.scss';
import { fetchCats, toggleModal } from '../../actions/actions'
import Card from '../../components/Card';
import Modal from '../../components/Modal';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  componentWillMount() {
    this.props.fetchCats();
  }

  renderCards() {
    if (!this.props.cats || this.props.cats.length <= 0) {
      return null
    }

    const cardNodes = this.props.cats.map((cat, index) => {
      return (
        <Card
          key={`${cat.toString()}+${index}`}
          cat={cat}
          toggleModal={this.handleToggleModal}
        />
      )
    });

    return cardNodes;
  }

  handleToggleModal(cat) {
    this.props.toggleModal(cat, this.props.history);
  }

  render() {
    return (
      <div className="app">
        <header className='app__header'>
          Test Technique Meero
        </header>
        {this.renderCards()}
        <Route
          path='/modal'
          render={() => {
            return (
              <Modal
                onCloseCallback={() => { this.handleToggleModal(false) }}
                content={<Card cat={this.props.selectedCat} />}
              />
            )
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (state) => {
  return {
    cats: state.mainReducer.cats,
    selectedCat: state.mainReducer.selectedCat
  }
}

export default withRouter(connect(mapDispatchToProps, { fetchCats, toggleModal })(App));
