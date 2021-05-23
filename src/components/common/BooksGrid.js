import "primeflex/primeflex.css";
import { ProgressSpinner } from "primereact/progressspinner";
import React from "react";
import BooksCard from 'components/common/BooksCard';

const BooksGrid = ({ books = [], loading }) => {
  if (loading || !books) {
    return (
      <div className="p-grid p-align-center p-justify-center">
        <ProgressSpinner />
      </div>
    );
  }

  return <div>      
      {books.map(book =>(
          <div key={book.id}>
              <BooksCard name={book.name} genre={book.genre} year={book.year}/>
          </div>
      ))}
  </div>;
};

export default BooksGrid;
