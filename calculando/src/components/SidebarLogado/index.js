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
import { useHistory } from 'react-router';


const SidebarLogado = ({isOpen, toggle}) => {
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
  function toMyClassesPage() {
    history.push('/myclasses');
  }
  function toNewClass() {
    history.push('/newclass');
  }
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
          <CloseIcon></CloseIcon>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink  onClick={toUserPage}>Minha Página</SidebarLink>
            <SidebarLink  onClick = {toMyClassesPage}>Minhas Classes</SidebarLink>
            <SidebarLink  onClick = {toNewClass}>Cadastrar Classes</SidebarLink>
            <SidebarLink  onClick={toUserResults}>Meus Resultados</SidebarLink>
            <SidebarLink  onClick={toTestPage}>Testes</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRouter onClick={logOut}>
              Sair
            </SidebarRouter>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
};
export default SidebarLogado