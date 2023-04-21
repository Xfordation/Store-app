import styled from "styled-components";

export const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }) => backgroundImage.src});
`;
