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
import igual from '../../images/igual.png';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  var n1 = 0;
  var n2;

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="rep">
        <table>
          <tr>
            <td><img src={um}  alt="logo" className="center zoom" id="um" onClick={n1 = 1} ></img></td>
            <td><img src={dois} alt="logo" className="center zoom" id="dois" onClick={n1 = 2}/></td>
            <td><img src={tres} alt="logo" className="center zoom" id="tres" onClick={n1 = 3}/></td>
          </tr>
          <tr>
            <td><img src={quatro} alt="logo" className="center zoom" id="quatro" onClick={n1 = 4}/></td>
            <td><img src={cinco} alt="logo" className="center zoom" id="cinco" onClick={n1 = 5}/></td>
            <td><img src={seis} alt="logo" className="center zoom" id="seis" onClick={n1 = 6}/></td>
          </tr>
          <tr>
            <td><img src={sete} alt="logo" className="center zoom" id="sete" onClick={n1 = 7}/></td>
            <td><img src={oito} alt="logo" className="center zoom" id="oito" onClick={n1 = 8}/></td>
            <td><img src={nove} alt="logo" className="center zoom" id="nove" onClick={n1 = 9}/></td>
          </tr>
          <tr>
            <td></td>
            <td><img src={zero} alt="logo" className="center zoom" id="zero" onClick={n1 = 0}/></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className="rep2">
        <table>
          <tr>
            <td><img src={adicao} alt="logo" className="center zoom"/></td>
            <td><img src={subtracao} alt="logo" className="center zoom"/></td>
          </tr>
          <tr> 
            <td><img src={multiplicacao} alt="logo" className="center zoom"/></td>
            <td><img src={divisao} alt="logo" className="center zoom"/></td>
          </tr>
        </table>
      </div>
      <div>
        <img src={igual} alt="logo" className="igual"></img>
      </div>
    </>
  )
}

export default Home
