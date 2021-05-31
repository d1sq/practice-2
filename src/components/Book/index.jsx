import React, { useEffect } from "react";
import useFetch from "hooks/useFetch";
import BooksGrid from "components/common/BooksGrid";
import { BOOKS } from "modules/api/endpoints";
import "../../components/Book/Book.scss";
import { useSelector } from "react-redux";

const Book = () => {
  const { response, performFetch } = useFetch(BOOKS);
  const { loading, data } = response;

  const state = useSelector((state) => {
    return {
      state
     
    };
  });
  console.log(state)
                
  useEffect(() => {
    performFetch();
  }, [performFetch]);



  //  let newBooks = { items: books.items.map(book => ({...book, genre: genres.items.filter(g=>g.id === book.genre_id)}))};

  return (
    <div>
      <BooksGrid books={data} loading={loading} />
    </div>
  );
};
export default Book;
