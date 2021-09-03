import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 8.5rem;
  padding-top: 2.4rem;
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;

  a {
    font-family: 'Rubik';
    font-style: none;
    text-decoration: none;
    color: #6C5846;
    font-size: 2.4rem;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 15px;
  background: #51A64E;
  color: #fff;
  font-size: 2.4rem;
  font-weight: 400;
  padding: 1.1rem 5.7rem;
  box-shadow: 5px 3px 20px 0 rgba(2, 89, 24, 0.35);
  transition: all .2s;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 3px 20px 0 rgba(2, 89, 24, 0.45);
  }
`;
