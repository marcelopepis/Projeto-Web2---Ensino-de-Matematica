import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Team from '../components/Team';
import { teamObjOne } from '../components/Team/Data';

const Equipe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Team {...teamObjOne}></Team>
    </>
  )
}

export default Equipe
