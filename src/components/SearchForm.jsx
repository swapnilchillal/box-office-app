import { useState } from "react";



const SearchForm = ({onSearch}) => {

    const [searchStr, setSearchStr] = useState('');
    const [searchOption, setSearchOption] = useState('shows');

    const onSearchInputChange = ev => {
        setSearchStr(ev.target.value);
      };
    
      const onRadioChange = ev => {
        setSearchOption(ev.target.value);
      };

      const onSubmit = ev => {
        ev.preventDefault();

        const options = {
            searchStr,
            searchOption,
        };

        onSearch(options);
      };

    return <form onSubmit={onSubmit}>
    <input type="text" value={searchStr} onChange={onSearchInputChange} />
    <label>
      shows
      <input
        type="radio"
        name="search-option"
        value="shows"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
      />
    </label>
    <label>
      actors
      <input
        type="radio"
        name="search-option"
        value="actors"
        checked={searchOption === 'actors'}
        onChange={onRadioChange}
      />
    </label>
    <button type="submit"> search </button>
  </form>

}

export default SearchForm;