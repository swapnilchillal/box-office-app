//import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

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
    return (
      <div>
        <div></div>
        <Link to="/">Go Back To Home</Link>
        <div></div>
        <ShowMainData
          name={showData.name}
          image={showData.image}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h2>Deatils</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
          <h2> Cast </h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>Data is Loading...</div>;
};

export default Show;
