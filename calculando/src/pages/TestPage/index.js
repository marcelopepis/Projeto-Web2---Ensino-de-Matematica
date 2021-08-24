
import {React, useState, useEffect} from 'react'
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
  const [numberLeft, setNumberLeft ] = useState('');
  const [numberRight, setNumberRight ] = useState('');

  function GenerateNumber() {
    var max = Math.ceil(10);
    var min = Math.floor(0);
    var numberOne =  Math.floor(Math.random() * (max - min + 1)) + min;
    var numberTwo =  Math.floor(Math.random() * (max - min + 1)) + min;

    return([numberOne, numberTwo]);
  }

  useEffect(() => {
    
    var number = GenerateNumber();
    setNumberLeft(number[0]);
    setNumberRight(number[1]);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    
    <Test>
    <SidebarLogado isOpen={isOpen} toggle={toggle}/>
    <NavBarLogado toggle={toggle} />
      <Container>
        <LeftNumber number={numberLeft}></LeftNumber>
        <Operation></Operation>
        <RightNumber number= {numberRight}></RightNumber>
        <Equals></Equals>
        <Result leftNumber = {numberLeft} rightNumber = {numberRight}></Result>
      </Container>
    </Test>    
  )
}
export default TestPage