import React, {useEffect} from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressSpinner } from 'primereact/progressspinner';
import 'components/Book/Book.scss'

import useFetch from "hooks/useFetch";

import { AUTHORS } from "modules/api/endpoints";


const Book = (authors = [], loading) => {
  const {response, performFetch} = useFetch(AUTHORS);
 useEffect(() => {
    performFetch();
 }, [performFetch])
 console.log(response);
 if (loading || !authors){
   return (
    <ProgressSpinner/>

   )
 }

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
  
  return (
    <div className="container">
      {response.authors.map((items) =>(
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
