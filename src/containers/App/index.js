import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from "react-router-dom";

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
    console.log(this.props.cats)
    return (
      <div className="app">
        <header className='app__header'>
          Test Technique Meero
        </header>
        {this.renderCards()}
        <Route
          path='/modal'
          render={() => {
            // Redirect to '/' if no cat is selected
            if (!this.props.selectedCat) {
              return <Redirect to='/' />
            }
            // Otherwise show the modal
            return (
              <Modal
                onCloseCallback={() => { this.handleToggleModal(false) }}
                cat={this.props.selectedCat}
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
