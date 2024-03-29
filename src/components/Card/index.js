import React from 'react';
import './styles.scss'

const Card = ({ cat, toggleModal, history }) => {
  const handleClick = () => {
    toggleModal(cat, history);
  }
  return (
    <div
      onClick={handleClick}
      className='card'
    >
      <div className='card__name'>
        {cat.name}
      </div>
      <div className='card__origin'>
        {cat.origin}
      </div>
      <div className='card__imageContainer'>
        <img src={cat.image} alt={`A ${cat.name}`} className='card__imageContainer__img' />
      </div>
    </div>    
  );
}

export default Card;
