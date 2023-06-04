import ActorCard from './ActorCard';

const ActorsGrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          country = {data.person.country}
          birthdate = {data.person.birthdate}
          deathdate = {data.person.deathdate}
          gender = {data.person.gender}
          name={data.person.name}
          image={
            data.person.image ? data.person.image.medium : '/Not_Found.png'
          }
          summary={data.person.summary}
        />
      ))}
    </div>
  );
};

export default ActorsGrid;
