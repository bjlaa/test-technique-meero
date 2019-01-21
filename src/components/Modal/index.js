import React from 'react';
import './styles.scss';

const Modal = ({ cat, onCloseCallback }) => {
  return (
    <div className='modal'>
      <div
        onClick={onCloseCallback}
        className='modal__background'
      />
      <div className='modal__window'>
        <div className='modal__window__name'>
          {cat.name}
        </div>
        <div className='modal__window__imageContainer'>
          <img src={cat.image} alt='' className='modal__window__imageContainer__img' />
        </div>
        <div className='modal__window__description'>
          {cat.description}
        </div>
      </div>
    </div>
  );
}

export default Modal;
