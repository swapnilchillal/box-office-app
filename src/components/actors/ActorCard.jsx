import { Link } from 'react-router-dom';

const ActorCard = ({ name, image, birthdate, deathdate, gender, country }) => {
  return (
    <div>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <div>
        <img src={image} alt={name} />
      </div>

      <p>{country ? `Comes from ${country.name}` : 'No country known'}</p>

      {!!birthdate && <p>Born {birthdate}</p>}

      <p>{deathdate ? `Died ${deathdate}` : 'Alive'}</p>

      <div>
        <Link to="/"> Read More </Link>
        <button type="button"> Start Me </button>
      </div>
    </div>
  );
};

export default ActorCard;
