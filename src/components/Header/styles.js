import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 12.5rem;
  background: var(--gray-700);

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    position: absolute;
    display: flex;
    gap: 0.5rem;
    width: 100%;
    max-width: 46rem;

    bottom: -25px;
    
    input {
      padding: 1rem;
      border-radius: 0.5rem;
      background: var(--gray-500);
      width: 100%;
      border: 1px solid var(--gray-700);
      color: var(--gray-100);
    }

    button {
      padding: 1rem;
      border-radius: 0.5rem;
      background-color: var(--blue-dark);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      strong {
        color: var(--gray-100);
      }
    }

    .SignOut {
      background: var(--red-dark);
      color: var(--gray-100);
      font-weight: bold;
    }
  }

  @media (max-width: 730px){
    div {
      padding: 0 1.125rem;
    }
  }
`;
