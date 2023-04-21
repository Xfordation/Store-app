import styled from "styled-components";

export const Card = styled.div`
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.surface};
  p {
    font-size: 18px;
  }
  small {
    font-size: 16px;
  }
  .card {
    align-self: center;
    justify-self: center;
    &-media {
      width: 100%;
      height: 200px;
      position: relative;
      img {
        object-fit: contain;
        overflow: hidden;
        mix-blend-mode: multiply;
      }
    }
  }
`;
