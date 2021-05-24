import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { InputText } from 'primereact/inputtext';
import "./AddNew.scss";
import { useSelector } from "react-redux";

const AddNew = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [authorsState, setAuthorsState] = useState(null);
  const [genresState, setGenresState] = useState(null);
  const authors = useSelector((state) => state.authors.items);
  const genres = useSelector((state) => state.genres.items);

  const authorsArray = authors.map((items) => {
    return {
      name: ` ${items.first_name} ${items.patronymic} ${items.last_name} `,
      authorValue: items.id,
    };
  });
  const genresArray = genres.map((items) => {
    return {
      genre: items.name,
      // genreValue: items.id,
    };
  });
  // genresArray.map((item) => console.log(item.genre))

  return (
    <div className="container_add-book">
      <div className="add-book">
        <div className="multiselect-demo">
          <div className="card">
          <InputText placeholder="Название книги" value={value1} onChange={(e) => setValue1(e.target.value)} /><br></br>
            <MultiSelect
              value={authorsState}
              options={authorsArray}
              optionValue={authorsArray}
              onChange={(e) => setAuthorsState(e.value)}
              optionLabel="name"
              placeholder="Выбрать автора"
              display="chip"
            /><br></br>
            <MultiSelect
              value={genresState}
              options={genresArray}
              optionValue={genresArray}
              onChange={(e) => setGenresState(e.value)}
              optionLabel="name"
              placeholder="Выбрать жанр"
              display="chip"
            /><br></br>
            <InputText placeholder="Год" value={value2} onChange={(e) => setValue2(e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
//А нужно ли хранить в redux Данные для отправки на сервер?
