import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px;
  margin: auto;

  h1 {
    margin: 0 auto 1.625rem;
  }

  input {
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--gray-500);
    width: 100%;
    border: 1px solid var(--gray-700);
    color: var(--gray-100);
  }

  .name, .date {
    display: flex;
    gap: 8px;
    input {
      &:first-child{
        flex: 0.9;
      }
      &:last-child {
        flex: 0.15;
      }
    }
  }

  button {
    background-color: var(--blue-dark);
    padding: 1rem;
    border-radius: 0.5rem;
    color: var(--gray-100);
    font-weight: bold;
    margin-top: 0.4rem;
  }

  @media (max-width: 730px){
    .name, .date {
      flex-direction: column;
    }
  }
`