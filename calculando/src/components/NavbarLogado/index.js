import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import LoginModal from '../LoginModal';
import { useHistory } from 'react-router';



const NavbarLogado = ({ toggle }) => {

  const [isLoginModalOpen, setisLoginModalOpen ] =useState(false);
  const history = useHistory();

  function logOut() {
    localStorage.removeItem('user');
    history.push('/');
  };

  function handleCloseLoginModalOpen() {
    setisLoginModalOpen(false);
  };


  return (
    <>
      <Nav>
        <NavbarContainer>
          <LoginModal isOpen={isLoginModalOpen}
                      onRequestClose={handleCloseLoginModalOpen}>
          </LoginModal>
          <NavLogo to='/'>
            Calculando
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>Minha Página</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/userresults'>Meus Resultados</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/testpage'>Testes</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={logOut}>Sair</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavbarLogado;
