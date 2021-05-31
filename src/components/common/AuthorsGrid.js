import "primeflex/primeflex.css";
import { ProgressSpinner } from "primereact/progressspinner";
import React from "react";
import AuthorCard from 'components/common/AuthorCard';

const AuthorsGrid = ({ authors = [], loading }) => {

  if (loading || !authors) {
    return (
      <div className="p-grid p-align-center p-justify-center">
        <ProgressSpinner />
      </div>
    );
  }

  return <div  className="container">      
      {authors.map(author =>(
          <div key={author.id}>
              <AuthorCard id={author.id} name={author.first_name} last_name={author.last_name} patronymic={author.patronymic}/>
          </div>
      ))}
  </div>;
};

export default AuthorsGrid;
