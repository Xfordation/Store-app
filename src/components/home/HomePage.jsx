import React from "react";
import { Modal } from "../styles/Modal.styles";
import { ContainerStyled } from "../styles/Container.styles";
import { StyledBackground } from "../styles/StyledBackground.styles";
import backgroundImage from "../../assets/patternpad.png";
import Form from "../Form";
import { useRouter } from "next/router";
const HomePage = () => {
  const router = useRouter();
  React.useEffect(() => {
    if (localStorage.getItem("userData") !== null) {
      router.push("/admin");
    }
  }, []);

  return (
    <ContainerStyled>
      <Modal>
        <StyledBackground backgroundImage={backgroundImage} />
        <Form />
      </Modal>
    </ContainerStyled>
  );
};

export default HomePage;
