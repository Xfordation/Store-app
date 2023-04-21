import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  width: 100%;
  background-color: #ffffff;
  height: 100%;
  justify-content: center;
  border-radius: 8px;
  opacity: 0.99;
  h2 {
    font-size: 40px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 20px;
  }
  .form-element {
    font-size: 20px;
    padding: 0.5rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.surface};
    border-radius: 8px;
    outline: none;
  }
  button {
    width: max-content;
    background-color: ${({ theme }) => theme.colors.primaryVariant};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.primaryVariant};
    font-size: 20px;
    border-radius: 8px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
      transition: ease-in 0.4s;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
