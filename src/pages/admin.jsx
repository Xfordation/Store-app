import Header from "@/components/header/Header";
import React from "react";
import { useRouter } from "next/router";
import { ContainerStyled } from "@/components/styles/Container.styles";
import Cards from "@/components/Cards";
import { Grid } from "@/components/styles/Grid.styles";
import { FaChartBar } from "react-icons/fa";
import Modal from "@/components/Modal";

const AdminPage = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    if (localStorage.getItem("userData") === null) {
      router.push("/");
    }
  }, []);

  return (
    <ContainerStyled>
      <section className="my-5">
        <Grid>
          {data.map(({ id, title, price, description, image }) => (
            <Cards
              id={id}
              title={title}
              price={price}
              description={description}
              image={image}
              key={id}
            />
          ))}
        </Grid>
        <button
          className="btn-chart postion-bottomRight"
          onClick={() => setIsOpen(true)}
        >
          <FaChartBar />
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </section>
    </ContainerStyled>
  );
};

export default AdminPage;

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { data },
  };
}
