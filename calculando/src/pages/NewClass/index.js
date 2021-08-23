import {React, useState, useEffect} from 'react';
import SidebarLogado from '../../components/SidebarLogado';
import NavBarLogado from '../../components/NavbarLogado';
import { api } from '../../services/api';


export default function NewClass() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return(
    <>
      <SidebarLogado isOpen={isOpen} toggle={toggle}/>
      <NavBarLogado toggle={toggle} />
      <h1>Cadastrar Nova Classe</h1>
    </>
  );
};