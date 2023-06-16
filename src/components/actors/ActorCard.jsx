import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import { StarIcon } from '../common/StarIcon';

const ActorCard = ({ name, image, birthdate, deathdate, gender, country }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>

      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country.name}` : 'No country known'}</p>

      {!!birthdate && <p>Born {birthdate}</p>}

      <p>{deathdate ? `Died ${deathdate}` : 'Alive'}</p>

      <div>
        <Link to="/"> Read More </Link>
        <button type="button"> Star Me </button>
      </div>
    </SearchCard>
  );
};

export default ActorCard;
