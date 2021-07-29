import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import LoginModal from '../LoginModal';


const Navbar = ({ toggle }) => {

  const [isLoginModalOpen, setisLoginModalOpen ] =useState(false);

  function handleOpenLoginModal() {
    setisLoginModalOpen(true);
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
              <NavLinks to='about'>Sobre nós</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='tecnologias'>Tecnologias</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='conteudo'>Conteúdo</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='team'>Equipe</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contato'>Contato</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={handleOpenLoginModal}>Acessar</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
