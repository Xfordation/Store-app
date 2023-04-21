import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
