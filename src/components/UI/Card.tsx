import React from "react";
import "./Card.css"
type cardProps = {
  children: React.ReactNode;
};
const Card = ({ children }: cardProps) => {
  return <li className="card">{children}</li>;
};

export default Card;
