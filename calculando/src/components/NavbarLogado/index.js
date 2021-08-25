import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import LoginModal from '../LoginModal';
import { useHistory } from 'react-router';



const NavbarLogado = ({ toggle,  }) => {

  const [isLoginModalOpen, setisLoginModalOpen ] =useState(false);
  const history = useHistory();

  function logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    history.push('/');
  };

  function toUserResults() {
    history.push('/userresults');
  };

  function toTestPage() {
    history.push('/testpage');
  }

  function toUserPage() {
    history.push('/userpage')
  }
  function toNewClass() {
    history.push('/newclass');
  }


  function handleCloseLoginModalOpen() {
    setisLoginModalOpen(false);
  };

  function toMyClassesPage() {
    history.push('/myclasses');
  }


  return (
    <>
      <Nav>
        <NavbarContainer>
          <LoginModal isOpen={isLoginModalOpen}
                      onRequestClose={handleCloseLoginModalOpen}>
          </LoginModal>
          <NavLogo >
            Calculando
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick = {toUserPage}>Minha Página</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick = {toMyClassesPage}>Minhas Classes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick = {toNewClass}>Cadastrar Classe</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick = {toUserResults}>Meus Resultados</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick = {toTestPage}>Testes</NavLinks>
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
