import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    position: 'absolute',
    maxWidth: '800px',
    minWidth: '50px',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: '',
    borderRadius: '4px',
    outline: 'none',
    margin: '0 auto',
  },
};

Modal.setAppElement('#root');

function ModalWindow({ show, component }) {
  return (
    <Modal isOpen={show} style={customStyles}>
      {component}
    </Modal>
  );
}

export default ModalWindow;
