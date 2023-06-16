import { useState } from 'react';
// import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { useQuery } from '@tanstack/react-query';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import { TextCenter } from '../components/common/TextCenter';



const Home = () => {
  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);

  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.searchStr)
        : searchForPeople(filter.searchStr),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ searchStr, searchOption }) => {
    setFilter({ searchStr, searchOption });

    // try {
    //   setApiDataError(null);
    //   let result;
    //   if (searchOption === 'shows') {
    //     result = await searchForShows(searchStr);
    //   } else {
    //     result = await searchForPeople(searchStr);
    //   }
    //   if (!result[0]) setApiDataError(Error("No results found")); //To Check is array is empty or undefined
    //   else setApiData(result);
    // } catch (error) {
    //   setApiDataError(error);
    // }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error Occured: {apiDataError.message}</TextCenter>;
    }

    if (apiData?.length === 0) {
      return <TextCenter>No Results</TextCenter>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }

    return null;
  };

  // {apiData.map((data) => (
  //   <div key={data.show.id}>{data.show.name}</div>
  // ))}

  // const body = await apiGet('/search/shows?q=${searchStr}');
  // const response = await fetch(
  //   `https://api.tvmaze.com/search/shows?q=${searchStr}`
  // );
  // const body = await response.json();
  // console.log(body);

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
