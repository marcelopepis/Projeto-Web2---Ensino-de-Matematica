import {React, useState, useStyles} from 'react'
import LeftNumber from '../../components/LeftNumber'
import Operation from '../../components/Operation';
import RightNumber from '../../components/RightNumber';
import SidebarLogado from '../../components/SidebarLogado';
import NavBarLogado from '../../components/NavbarLogado';
import Equals from '../../components/Equals';
import Result from '../../components/Result';
import { Container, Test } from './styles';

const TestPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <Test>
    <SidebarLogado isOpen={isOpen} toggle={toggle}/>
    <NavBarLogado toggle={toggle} />
      <Container>
        <LeftNumber></LeftNumber>
        <Operation></Operation>
        <RightNumber></RightNumber>
        <Equals></Equals>
        <Result></Result>
      </Container>
    </Test>    
  )
}
export default TestPage