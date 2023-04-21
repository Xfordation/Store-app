import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
const Globals = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body{
  font-family: "Poppins";
  line-height: 1.5;
  background-color: transparent;
 }

a {
  text-decoration: none;
}

.bg{
  &-dark{
    background-color: ${({ theme }) => theme.colors.background};
  }
}

.postion{
  &-relative{
    position: relative;
  }
  &-bottomRight{
    position: fixed;
    right: 0;
    bottom: 0;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
}

.m{
  &y{
    &-5{
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  }
}


.btn{
  &-icon{
    background-color: transparent;
    padding: 1rem;
    font-size: 20px;
    border: none;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.primary};
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
  }
  &-chart{
    background-color: ${({ theme }) => theme.colors.primaryVariant};
    color: #ffffff;
    padding: 1.5rem;
    font-size: 20px;
    border: none;
    line-height: 0;
    border-radius: 50%;
    cursor: pointer;
    &:hover{
      opacity: 0.7;
    }
  }
}
`;
export default Globals;
