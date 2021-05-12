import React from "react";
import { Card } from "primereact/card";
import {useSelector} from 'react-redux';
import '../../components/Book/Book.scss'
const Book = () => {
  const state = useSelector(({ genres }) => {
    return {
      genres: genres.items
     
    };
  });


  const header = (
    null
  );
  const footer = (
    null
  );
    //создать экшон Условие если authorId === book.author.id то setAuthorId = author
  return (
    <div className="container">
      {state.genres.map((items) =>(
      <Card
        title={items.name}
        key={items.id}
        subTitle= {null}
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
