import { useState } from "react";
import { searchForShows } from "./../api/tvmaze";

const Home = () => {
  const [searchStr, setSearchStr] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearchInputChange = (ev) => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault();

    try {
setApiDataError(null)

      const result = await searchForShows(searchStr);
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
if(apiDataError)
{
  return <div>Error Occured: {apiDataError.message}</div>
}

    if (apiData) {
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
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
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit"> search </button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
