import React, {useEffect, useMemo} from "react";

import { useSelector } from 'react-redux';
import useFetch from "hooks/useFetch";
import { AUTHORS } from "modules/api/endpoints";
import AuthorsGrid from "components/common/AuthorsGrid";


const Authors = () => {
  const {response, performFetch} = useFetch(AUTHORS);
  const {loading, data} = response;
console.log(data)
 useEffect(() => {
    performFetch();
 }, [performFetch])

  return (
    <div className="container">
      <AuthorsGrid authors={data} loading={loading}/>
    </div>
  );
};
export default Authors;
