import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import "./AddNew.scss";
import { useSelector } from "react-redux";

const AddNew = () => {
  const [authorsState, setAuthorsState] = useState(null);
  const authors = useSelector((state) => state.authors.items);
  console.log(authors)

  const authorsArray = authors.map((items) => {
    return{
      name: ` ${items.first_name} ${items.patronymic} ${items.last_name} `,
      code: items.id
    }
  });

  

  return (
    <div className="multiselect-demo">
      <div className="card">
        <MultiSelect
          
          value={authorsState}
          options={authorsArray}
          onChange={(e) => setAuthorsState(e.value)}
          optionLabel="name"
          placeholder="Выбрать автора"
          display="chip"
        />
      </div>
    </div>
  );
};

export default AddNew;
