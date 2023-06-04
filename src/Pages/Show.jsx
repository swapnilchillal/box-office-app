//import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

// const useShowById = showId => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getShowById(showId);
//         setShowData(data);
//       } catch (err) {
//         setShowError(err);
//       }
//     }

//     fetchData();
//   }, [showId]);

//   return { showData, showError };
// };

const Show = () => {
  const { ShowId } = useParams();
  // const { showData, showError } = useShowById(ShowId);

  const { data: showData, error: showError } = useQuery({
    queryKey: ['Show', ShowId],
    queryFn: () => getShowById(ShowId),
  });

  if (showError) {
    return <div>We have an Error {showError.message}</div>;
  }

  if (showData) {
    return <div>Got show data : {showData.name}</div>;
  }

  return <div>Data is Loading...</div>;
};

export default Show;
