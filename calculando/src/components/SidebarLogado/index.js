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
            <SidebarLink to="/userpage" onClick={toUserPage}>
              Minha Página
            </SidebarLink>
            <SidebarLink to="/#" onClick = {toMyClassesPage}>Minhas Classes</SidebarLink>
            <SidebarLink to="/#" onClick = {toNewClass}>Cadastrar Classes</SidebarLink>
            <SidebarLink to="/userresults" onClick={toUserResults}>
              Meus Resultados
            </SidebarLink>
            <SidebarLink to="/testpage" onClick={toTestPage}>
              Testes
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRouter to="/" onClick={logOut}>
              Sair
            </SidebarRouter>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default SidebarLogado