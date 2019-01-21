import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

const OriginSelector = ({ origins }) => {
  const renderCheckboxes = () => {
    if(!origins || origins.length <= 0) return null;

    const checkboxNodes = origins.map((origin) => {
      return (
        <div className='originSelector__checkbox'>
          <input
            id={`checkbox-${origin}`}
            type='checkbox'
            onChange={}
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



export default connect(null, null)(OriginSelector);
