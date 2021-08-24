import {React, useState, useEffect} from 'react'
import Modal from 'react-modal';
import { Container } from './styles';
import {api} from '../../services/api';


export default function ListStudentsModal({isOpen, onRequestClose, class_id}){

  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    async function getStudents() {
      const response = await api.post('/listclassmembers',{
        id_class: class_id
      });
      setStudentList(response.data);
    };
    getStudents();
  },[class_id]);
  console.log(studentList);
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