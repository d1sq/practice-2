import "primeflex/primeflex.css";
import { ProgressSpinner } from "primereact/progressspinner";
import React from "react";
import BooksCard from "components/common/BooksCard";

const BooksGrid = ({ books = [], loading }) => {
  if (loading || !books) {
    return (
      <div className="p-grid p-align-center p-justify-center">
        <ProgressSpinner />
      </div>
    );
  }

  // if(books.length > 0){
  // console.log(books.items);
  // books.items.map(book => console.log(book.items.genre.name))
  // }
  if(books.length === 0){
    return (
      <div className="p-grid p-align-center p-justify-center">
        <ProgressSpinner />
      </div>
    );
  }
  else{
    return (
      <div className="container">
        {books.items.map((book) => (
          <div key={book.id}>
            <BooksCard
              id={book.id}
              name={book.name}
              genre={book.name}
              genre_id={book.genre_id}
              year={book.year}
            />
          </div>
        ))}
      </div>
    );
  }
    
};


export default BooksGrid;
