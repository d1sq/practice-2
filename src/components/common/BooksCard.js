import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DeleteItem, EditItem } from "services/ChangeItems";


const BookCard = ({ name, genre_id, year, id }) => {
  
 
  const header = null;
  const footer = (
    <span>
      <Button
        label="Save"
        icon="pi pi-check"
        onClick={() => EditItem("books", id)}
      />
      <Button
        onClick={() =>  DeleteItem("books", id)}
        label="Delete"
        icon="pi pi-times"
        className="p-button-secondary p-ml-2"
      />
    </span>
  );

  return (
    <div>
      <Card
        title={name}
        subTitle={genre_id}
        style={{ width: "25em" }}
        footer={footer}
        header={header}
      >
        {year}
      </Card>
    </div>
  );
};

export default BookCard;
