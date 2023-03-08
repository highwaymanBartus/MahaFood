import { Link } from "react-router-dom";
import React from "react";

export const GalleryView = ({ back, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Link to={back.to}>{back.text}</Link>
    </div>
  );
};
