import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const AuthorCard = (name, last_name, patronymic) => {
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
        title={`${name.name} ${name.last_name} ${name.patronymic}`}
        style={{ width: "25em" }}
        footer={footer}
        header={header}
      ></Card>
    </div>
  );
};

export default AuthorCard;
