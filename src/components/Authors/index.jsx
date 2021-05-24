import React, {useEffect} from "react";
import useFetch from "hooks/useFetch";
import { AUTHORS } from "modules/api/endpoints";
import AuthorsGrid from "components/common/AuthorsGrid";


const Authors = () => {
  const {response, performFetch} = useFetch(AUTHORS);
  const {loading, data} = response;
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
