import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import {useSelector} from 'react-redux';
import '../../components/Book/Book.scss'
const Book = () => {
  const state = useSelector(({ books, authors }) => {
    return {
      authors: authors.items,
     
    };
  });


  const header = (
    null
  );
  const footer = (
    <span>
      <Button label="Find Books" icon="pi pi-check" style={{margin: "8px"}} />
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
      {state.authors.map((items) =>(
      <Card
        title={`${items.first_name}  ${items.patronymic}  ${items.last_name}`}
        key={items.id}
        subTitle={null}
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
