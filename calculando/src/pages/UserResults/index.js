import {React, useState} from 'react';
import ResultsCard from '../../components/ResultsCard';
import SidebarLogado from '../../components/SidebarLogado';
import NavBarLogado from '../../components/NavbarLogado';
import {Cards, Container} from './styles';


const UserResults = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return(
    <Cards>
      <SidebarLogado isOpen={isOpen} toggle={toggle}/>
      <NavBarLogado toggle={toggle} />
      <Container>
      <ResultsCard>A</ResultsCard>
      </Container>      
    </Cards>
  );
}

export default UserResults