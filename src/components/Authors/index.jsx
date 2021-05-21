import React, {useEffect} from "react";
import 'components/Book/Book.scss'

import useFetch from "hooks/useFetch";

import { AUTHORS } from "modules/api/endpoints";
import AuthorCard from "components/common/AuthorCard";
import AuthorsGrid from "components/common/AuthorsGrid";


const Authors = (authors = [], loading) => {
  const {response, performFetch} = useFetch(AUTHORS);
  
 useEffect(() => {
    performFetch();
 }, [performFetch])


  
  
  return (
    <div className="container">
      <AuthorsGrid authors="123" />
    </div>
  );
};
export default Authors;
