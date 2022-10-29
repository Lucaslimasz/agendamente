import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  
  button {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    background: var(--red-dark);
    padding: 0.625rem 1.25rem;
    border-radius: 0.5rem;

    img {
      width: 1.8rem;
    }
    p{
      color: var(--gray-100);
      font-weight: bold;
    }
    
  }
`;
