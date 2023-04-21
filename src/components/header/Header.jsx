import React from "react";
import { Navigation } from "../styles/Navigation";
import { ContainerStyled } from "../styles/Container.styles";
import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/router";
const Header = () => {
  const [userData, setUserData] = React.useState();
  const router = useRouter();
  React.useEffect(() => {
    if (localStorage.getItem("userData") !== null) {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    }
  }, []);

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    router.push("/");
  };
  return (
    <Navigation>
      <ContainerStyled>
        {userData ? (
          <header>
            <h2>Welcome, {userData.name}</h2>
            <button className="btn-icon" onClick={handleSignOut}>
              <FaSignOutAlt />
            </button>
          </header>
        ) : (
          ""
        )}
      </ContainerStyled>
    </Navigation>
  );
};

export default Header;
