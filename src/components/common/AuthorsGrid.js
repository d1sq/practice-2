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

  return <div>
              <AuthorCard name="tname" last_name='tlnm' patronymic='tptr'/>
      {/* {authors.map(items =>(
          <div key={items.id}>
              <AuthorCard name={items.name} last_name={items.last_name} patronymic={items.patronymic}/>
          </div>
      ))} */}
  </div>;
};

export default AuthorsGrid;
