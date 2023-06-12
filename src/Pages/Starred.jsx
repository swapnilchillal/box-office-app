import { getShowByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';

function Starred() {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),

    refetchOnWindowFocus: false,
  });

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShows?.length === 0) {
    return <div>No shows starred</div>;
  }
  if (starredShowsError) {
    return <div>Error Occured: {starredShowsError.message}</div>;
  }

  return <div>starred item loading.. </div>;
}

export default Starred;
