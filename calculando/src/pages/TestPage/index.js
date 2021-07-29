import {React, useState, useStyles} from 'react'
import LeftNumber from '../../components/LeftNumber'
import Operation from '../../components/Operation';
import RightNumber from '../../components/RightNumber';
import { Container } from './styles';

const TestPage = () => {
  return (
    <Container>
      <LeftNumber></LeftNumber>
      <Operation></Operation>
      <RightNumber></RightNumber>
    </Container>
    
  )
}
export default TestPage