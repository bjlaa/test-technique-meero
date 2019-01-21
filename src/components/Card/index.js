import React from 'react';
import './styles.scss'

const Card = ({ cat }) => {
  return (
    <div className='card'>
      <div className='card__name'>
        {cat.name}
      </div>
      <div className='card__origin'>
        {cat.origin}
      </div>
      <div className='card__imageContainer'>
        <img src={cat.img} alt={`A ${cat.name}`} className='card__imageContainer__img' />
      </div>
    </div>    
  );
}

export default Card;
