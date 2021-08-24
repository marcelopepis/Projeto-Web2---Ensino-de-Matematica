import {React, useState, useEffect} from 'react'
import Modal from 'react-modal';
import {api} from '../../services/api';
import './styles.css';


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
        <ul className="student-list">
          {studentList.map(student => (
            <li key={student._id}>
              <strong>Nome: {student.name}</strong>
              <span>Resposta Corretas: {student.right_answers}</span>
              <span>Resposta Incorretas: {student.wrong_answers}</span>
              <span>Turma: {student.id_class}</span>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
};