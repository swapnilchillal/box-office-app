import ActorCard from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';
import imagenotfound from '../../lib/Not_Found.png';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          country={data.person.country}
          birthdate={data.person.birthdate}
          deathdate={data.person.deathdate}
          gender={data.person.gender}
          name={data.person.name}
          image={data.person.image ? data.person.image.medium : imagenotfound}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
