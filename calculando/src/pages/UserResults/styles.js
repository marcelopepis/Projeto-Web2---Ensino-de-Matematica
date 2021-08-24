import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
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
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0%.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: #969CB3;
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: #2ca4f8;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Cards = styled.div`
  vertical-align: middle;
  
`;
