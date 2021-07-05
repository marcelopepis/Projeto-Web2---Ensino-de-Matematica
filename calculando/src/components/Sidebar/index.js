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
const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon></CloseIcon>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="sobre">
              Sobre
            </SidebarLink>
            <SidebarLink to="conteudo">
              Conteúdo
            </SidebarLink>
            <SidebarLink to="tecnologias">
              Tecnologias
            </SidebarLink>
            <SidebarLink to="equipe">
              Equipe
            </SidebarLink>
            <SidebarLink to="contato">
              Contato
            </SidebarLink>
            <SidebarLink to="signin">
              Cadastrar
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRouter to="/signin">
              Entrar
            </SidebarRouter>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar