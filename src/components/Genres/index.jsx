import React, { useEffect, useMemo } from "react";
import { Card } from "primereact/card";
import useFetch from "hooks/useFetch";

import "../../components/Book/Book.scss";
import { GENRES } from "modules/api/endpoints";

const Genres = () => {
  const { response, performFetch } = useFetch(GENRES);
  const { data } = response;

  const preparedData = useMemo(() => {
    if (!Array.isArray(data)) {
      return [];
    }
    return data
  }, [data]);


  useEffect(() => {
    performFetch();
  }, [performFetch]);

  return (
    <div>
      {preparedData.map(item =>(
        <div key={item.id}>
          <Card title={item.name} style={{ width: '25rem', marginBottom: '2em' }}>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>{item.id}</p>
            </Card>
        </div>
      ))}
      
    </div>
  );
};
export default Genres;
