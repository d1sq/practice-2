import React from "react";
import { MultiSelect } from "primereact/multiselect";
import { useSelector } from "react-redux";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import "./AddNew.scss";

const AddNew = () => {
  const [SelectedAuthors, setSelectedAuthors] = React.useState(null);
  const [SelectedGenres, setSelectedGenres] = React.useState(null);
  const [BookName, setBookName] = React.useState(null);
  const [BookYear, setBookYear] = React.useState(null);
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
      name: items.name,
      genresValue: items.id,
    };
  });
// genresArray.map(item => console.log(item.name))

  return (
    <div className="container_add-book">
      <div className="add-book">
        <div className="multiselect-demo">
          <div className="card">
          <InputText placeholder="Название книги" value={BookName} onChange={(e) => setBookName(e.target.value)} />
          <InputText placeholder="Год" value={BookYear} onChange={(e) => setBookYear(e.target.value)} /><br></br>
            <MultiSelect
              value={SelectedAuthors}
              options={authorsArray}
              onChange={(e) => setSelectedAuthors(e.value)}
              optionLabel="name"
              placeholder="Select an author"
              display="chip"
            /><br></br>
            <Dropdown value={SelectedGenres} options={genresArray} onChange={(e) => setSelectedGenres(e.value)} optionLabel="name" placeholder="Select a genre " />
            <br></br>
            <Button label="Success" className="p-button-success" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
//А нужно ли хранить в redux Данные для отправки на сервер?
//Как в отображение книг достать автора
//как сделать удаление книг