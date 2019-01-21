import React from 'react';
import { connect } from 'react-redux';

import { filterCats } from '../../actions/actions';
import './styles.scss';

const OriginSelector = ({ origins, originsToShow, filterCats }) => {
  const renderCheckboxes = () => {
    if(!origins || origins.length <= 0) return null;

    const checkboxNodes = origins.map((origin) => {
      return (
        <div
          key={origin}
          className='originSelector__checkbox'
        >
          <input
            id={`checkbox-${origin}`}
            type='checkbox'
            onChange={filterCats.bind(null, origin)}
          />
          <label htmlFor={`checkbox-${origin}`}>
            {origin}
          </label>
        </div>
      )
    });

    return checkboxNodes;
  }

  return (
    <div className='originSelector'>
      {renderCheckboxes()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    originsToShow: state.mainReducer.originsToShow,
    origins: state.mainReducer.origins
  }
}

export default connect(mapStateToProps, { filterCats })(OriginSelector);
