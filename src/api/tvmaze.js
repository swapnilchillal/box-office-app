
const BaseUrl = 'https://api.tvmaze.com'

const apiGet = async (queryString) => {
  
  //throw new Error("Something bad happened"); 

    const response = await fetch(
  `${BaseUrl}${queryString}`
    );
    const body = await response.json();
  
    return body;
};

export const searchForShows = (query) => apiGet(`/search/shows?q=${query}`);
