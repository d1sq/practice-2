import React, { useEffect } from "react";
import useFetch from "hooks/useFetch";
import BooksGrid from "components/common/BooksGrid";
import { BOOKS } from "modules/api/endpoints";
import "../../components/Book/Book.scss";
import { useSelector } from "react-redux";

const Book = () => {
  const { response, performFetch } = useFetch(BOOKS);
  const { loading } = response;

  const state = useSelector((state) => {
    return {
      state
    };
  });
  // console.log(state.state.api)
                
  useEffect(() => {
    performFetch();
  }, [performFetch]);

  let newBooks
  
  // console.log(state.state.api.books.data);
  if(state.state.api.books.data && state.state.api.genres.data){
    newBooks = {
      items: state.state.api.books.data.map(book => ({...book, genre: state.state.api.genres.data.filter(g => g.id === book.genre_id) }))
    }
  } 
  
  
  return (
    <div>
      <BooksGrid books={newBooks} loading={loading} />
    </div>
  );
};
export default Book;
