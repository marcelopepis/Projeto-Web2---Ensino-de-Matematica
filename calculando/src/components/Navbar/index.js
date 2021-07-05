import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            Calculando
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='conteudo'>Conteúdo</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='tecnologias'>Tecnologias</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='equipe'>Equipe</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contato'>Contato</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Acessar</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
