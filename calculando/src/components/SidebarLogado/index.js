import React from 'react'
import { 
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRouter
  } from './SidebarElements';
const SidebarLogado = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
          <CloseIcon></CloseIcon>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/userpage">
              Minha Página
            </SidebarLink>
            <SidebarLink to="/userresults">
              Meus Resultados
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRouter to="/">
              Sair
            </SidebarRouter>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default SidebarLogado