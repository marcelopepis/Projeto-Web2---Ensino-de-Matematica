import {React, useState} from 'react';
import SidebarLogado from '../../components/SidebarLogado';
import NavbarLogado from '../../components/NavbarLogado';
import {Container} from './styles';


const UserPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return(
      <Container>
        <SidebarLogado isOpen={isOpen} toggle={toggle} />
        <NavbarLogado toggle={toggle} />
        
      </Container>
  );
}

export default UserPage