import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavBarElements';

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
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
