import React from 'react';
import './styles.scss';

const Modal = ({ content }) => {
  return (
    <div className='modal'>
      <div className='modal__background'></div>
      <div className='modal__window'>
        { content }
      </div>
    </div>
  );
}

export default Modal;
