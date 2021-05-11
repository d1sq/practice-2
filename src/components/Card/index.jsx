import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import {useSelector} from 'react-redux';
import './Card.scss'
const CardD = () => {
  const {items} = useSelector(({ books }) => {
    return {
      items: books.items,
     
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

  return (
    <div className="container">
      {items.map((items) =>(
      <Card
        title={items.name}
        key={Math.random()}
        subTitle="author"
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
export default CardD;
