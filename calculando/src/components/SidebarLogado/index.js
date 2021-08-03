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

  function toUserResults() {
    history.push('/userresults');
  };

  function toTestPage() {
    history.push('/testpage');
  }
  function toUserPage() {
    history.push('/userpage')
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
            <SidebarLink to="/userresults" onClick={toUserResults}>
              Meus Resultados
            </SidebarLink>
            <SidebarLink to="/testpage" onClick={toTestPage}>
              Testes
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