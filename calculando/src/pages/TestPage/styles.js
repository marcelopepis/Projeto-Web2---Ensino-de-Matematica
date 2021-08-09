import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20;
  position: absolute;
  align-self: center;
  margin-top: 10%;
  margin-left: 30%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 5fr);
    transition: all 0.2s ease-in-out;
    margin-left: 35%;
    margin-top: 5%;
  }
`;

export const Test = styled.div`
  vertical-align: middle;
  margin-top: 50px;
`;