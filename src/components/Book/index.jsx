import React, {useEffect} from "react";
import useFetch from "hooks/useFetch";
import BooksGrid from "components/common/BooksGrid";
import { BOOKS } from "modules/api/endpoints";
import "./Book.scss";

const Book = () => {
  const {response, performFetch} = useFetch(BOOKS);
  const {loading, data} = response;

 useEffect(() => {
    performFetch();
 }, [performFetch])

  return (
    <div className="container">
      <BooksGrid books={data} loading={loading}/>
    </div>
  );
};
export default Book;
