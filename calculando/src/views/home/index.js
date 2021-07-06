import React, {useState} from 'react'
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import './home.css';
import zero from '../../images/0.png';
import um from '../../images/1.png';
import dois from '../../images/2.png';
import tres from '../../images/3.png';
import quatro from '../../images/4.png';
import cinco from '../../images/5.png';
import seis from '../../images/6.png';
import sete from '../../images/7.png';
import oito from '../../images/8.png';
import nove from '../../images/9.png';
import adicao from '../../images/adicao.png';
import subtracao from '../../images/subtracao.png';
import multiplicacao from '../../images/multiplicacao.png';
import divisao from '../../images/divisao.png';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="rep">
        <table>
          <tr>
            <td><input type="image" src={um}  alt="logo" className="center zoom"/></td>
            <td><input type="image" src={dois} alt="logo" className="center zoom"/></td>
            <td><input type="image" src={tres} alt="logo" className="center zoom"/></td>
          </tr>
          <tr>
            <td><input type="image" src={quatro} alt="logo" className="center zoom"/></td>
            <td><input type="image" src={cinco} alt="logo" className="center zoom"/></td>
            <td><input type="image" src={seis} alt="logo" className="center zoom"/></td>
          </tr>
          <tr>
            <td><input type="image" src={sete} alt="logo" className="center zoom"/></td>
            <td><input type="image" src={oito} alt="logo" className="center zoom"/></td>
            <td><input type="image" src={nove} alt="logo" className="center zoom"/></td>
          </tr>
          <tr>
            <td></td>
            <td><input type="image" src={zero} alt="logo" className="center zoom"/></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className="rep2">
        <table>
          <tr>
            <td><input type="image" src={adicao} alt="logo" className="center zoom"/></td>
            <td><input type="image" src={subtracao} alt="logo" className="center zoom"/></td>
          </tr>
          <tr> 
            <td><input type="image" src={multiplicacao} alt="logo" className="center zoom"/></td>
            <td><input type="image" src={divisao} alt="logo" className="center zoom"/></td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Home
