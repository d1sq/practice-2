import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import {useSelector} from 'react-redux';
import './Book.scss'
const Book = () => {
  const state = useSelector(({ books, authors }) => {
    return {
      books: books.items,
      authors: authors.items,
     
    };
  });


  const header = (
    null
  );
  const footer = (
    <span>
      <Button label="Mark" icon="pi pi-check" />
      <Button
        label="Delete"
        icon="pi pi-times"
        className="p-button-secondary p-ml-2"
      />
    </span>
  );
    //создать экшон Условие если authorId === book.author.id то setAuthorId = author
  return (
    <div className="container">
      {state.books.map((items) =>(
      <Card
        title={items.name}
        key={Math.random()}
        subTitle='123'
        style={{ width: "15em" }}
        footer={footer}
        header={header}
      >
        <p className="p-m-0" style={{ lineHeight: "1.5" }}>
          {items.year}
        </p>
      </Card>) )}
      
    </div>
  );
};
export default Book;
