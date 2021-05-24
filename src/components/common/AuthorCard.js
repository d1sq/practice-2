import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DeleteItem, EditItem } from "services/ChangeItems";

const AuthorCard = ({ name, last_name, patronymic, id }) => {
 

  const header = null;
  const footer = (
    <span>
      <Button
        onClick={() => EditItem("authors", id)}
        label="Edit"
        icon="pi pi-check"
      />
      <Button
        onClick={() => DeleteItem("authors", id)}
        label="Delete"
        icon="pi pi-times"
        className="p-button-secondary p-ml-2"
      />
    </span>
  );

  return (
    <div>
      <Card
        title={`${name} ${last_name} ${patronymic}`}
        style={{ width: "25em" }}
        footer={footer}
        header={header}
      ></Card>
    </div>
  );
};

export default AuthorCard;
