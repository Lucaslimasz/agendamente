import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 46rem;
  margin: auto;
  padding-top: 5.625rem;

  @media (max-width: 730px){
    padding: 5.625rem 1.125rem 0 ;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray-400);
  padding-bottom: 1.5rem;

  div {
    display: flex;
    gap: 0.5rem;

    strong{
      color: var(--blue);
    }

    span {
      padding: 0.125rem 0.5rem;
      background: var(--gray-400);
      border-radius: 60rem;
      font-weight: 500;
    }
    
    &:last-child{
      strong {
        color: var(--purple);
      }
    }
  }
`;

export const Empty = styled.div`
  padding: 4rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--gray-300);

  strong {
    padding: 1rem 0 0.625rem;
  }
`;

export const Patient = styled.tr`
  padding: 5rem;
  background: var(--gray-500);
  border-radius: 0.5rem;
  border-bottom: 0.75rem solid var(--gray-600);

  ${
    (props) => props.checked && css`
      color: var(--gray-300);
      text-decoration-line: line-through;
    `
  }
  
  .name {
    max-width: 13.75rem;
    padding: 1.5rem 1.375rem 1.5rem 0;
  }

  .check {
    padding-left: 2rem;
    cursor: pointer;
  }

  .stash {
    cursor: pointer;
  }
`;

export const Patients = styled.table`
  width: 100%;
  margin: 2rem 0;
  border: none;
  border-collapse: collapse;

  max-height: 500px;
  
  td, th {
    text-align: left;
  }

  th {
    padding-bottom: 1.25rem;
  }

  tr {
    margin-bottom: 1.25rem;
  }
`