import { getShowByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { TextCenter } from '../components/common/TextCenter';

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
    return <TextCenter>No shows starred</TextCenter>;
  }
  if (starredShowsError) {
    return <TextCenter>Error Occured: {starredShowsError.message}</TextCenter>;
  }

  return <TextCenter>starred item loading.. </TextCenter>;
}

export default Starred;
