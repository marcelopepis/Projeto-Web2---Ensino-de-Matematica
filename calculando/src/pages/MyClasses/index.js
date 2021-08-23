import {React, useState, useEffect} from 'react';
import SidebarLogado from '../../components/SidebarLogado';
import NavBarLogado from '../../components/NavbarLogado';
import './styles.css'
import { api } from '../../services/api';


export default function MyClasses(){

  const [isOpen, setIsOpen] = useState(false);
  const [classes, setClasses] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    async function loadClasses() {
      const id_professor = localStorage.getItem('user');
      const response = await api.post('/listclasses',{
        id_professor:id_professor        
      });
      setClasses(response.data);
    };

    loadClasses()
  }, []);
  
  return(
    <>
      <SidebarLogado isOpen={isOpen} toggle={toggle}/>
      <NavBarLogado toggle={toggle} />
        <ul className="classes-list">
          {classes.map(classe =>(
            <li key={classe.id_class}>
              <strong>{classe.id_class}</strong>
              <span>{classe.class_name}</span>
            </li>
          ))}
        </ul>        
    </>     
  )  
};