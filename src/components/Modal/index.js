import React from 'react';
import './styles.scss';

const Modal = ({ content, onCloseCallback }) => {
  return (
    <div className='modal'>
      <div
        onClick={onCloseCallback}
        className='modal__background'
      />
      <div className='modal__window'>
        { content }
      </div>
    </div>
  );
}

export default Modal;
