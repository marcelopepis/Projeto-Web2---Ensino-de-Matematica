import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 5fr);
    transition: all 0.2s ease-in-out;
  }
`;