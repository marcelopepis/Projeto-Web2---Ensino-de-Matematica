import {React, useState} from 'react';
import ClassCard from '../../components/ClassCard';
import SidebarLogado from '../../components/SidebarLogado';
import NavBarLogado from '../../components/NavbarLogado';
import {Cards, Container} from './styles';


const MyClasses = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return(
    <Cards>
      <SidebarLogado isOpen={isOpen} toggle={toggle}/>
      <NavBarLogado toggle={toggle} />
      <Container>
      <ClassCard></ClassCard>
      </Container>      
    </Cards>
  )  
};

export default MyClasses