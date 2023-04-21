import React from "react";
import { Card } from "./styles/Card.styles";
import Image from "next/image";
const Cards = ({ id, title, price, description, image }) => {
  return (
    <Card>
      <div className="card-media">
        <Image src={image} fill alt="img" />
      </div>
      <p style={{ fontWeight: "bold" }}>{title}</p>
      <small>
        {description.length > 150
          ? `${description.substring(0, 150)}...read more`
          : description}
      </small>
      <p>$ {price} </p>
    </Card>
  );
};

export default Cards;
