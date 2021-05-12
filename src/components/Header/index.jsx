import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import "./Header.scss"
const Header = () => {
  return (
    <div className="lirary__header">
      <Link to={`/`}>
      <Button label="Main" className="button-secondary " style={{margin: "15px"}} />
      </Link>
      <Link to={`/books`}>
        <Button label="Books" className="button-secondary margin15" style={{margin: "10px"}} />
      </Link>
      <Link to={`/authors`}>
        <Button label="Authors" className="button-success margin15" style={{margin: "10px"}} />
      </Link>
      <Link to={`/genres`}>
        <Button label="Genres" className="button-warning margin15" style={{margin: "10px"}} />
      </Link>
      <Link to={`/new`}>
        <Button label="Add" className="button-warning margin15" style={{margin: "10px"}} />
      </Link>
    </div>
  );
};

export default Header;
