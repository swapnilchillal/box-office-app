import { useParams } from 'react-router-dom';

const Show = () => {
  const { ShowId } = useParams();

  return <div>This is Show Page {ShowId}</div>;
};

export default Show;
