import {React, useState} from 'react'
import Modal from 'react-modal';
import { Container } from './styles';
import {api} from '../../services/api';


const ListStudentsModal = ({isOpen, onRequestClose, class_id}) => {
  return(
    <>
      <Modal isOpen ={isOpen}
       onRequestClose={onRequestClose}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
       ariaHideApp={false}
      >
        <h2>id da sala: {class_id}</h2>

      </Modal>
    </>
  );
};

export default ListStudentsModal;