import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
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
    </SearchCard>
  );
};

export default ActorCard;
