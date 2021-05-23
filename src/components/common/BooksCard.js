import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const BookCard = ({name, genre, year}) => {
  const header = null;
  const footer = (
    <span>
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary p-ml-2"
      />
    </span>
  );
   
  return (
    <div>
      <Card
        title={name}
        subTitle={genre}
        style={{ width: "25em" }}
        footer={footer}
        header={header}
      >{year}</Card>
    </div>
  );
};

export default BookCard;
