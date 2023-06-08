const ShowCard = ({ name, image, id, summary }) => {
  const checkSummary = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Description';

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />

      <div>{checkSummary}</div>

      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          {' '}
          Read More{' '}
        </a>
        <button type="button"> Start Me </button>
      </div>
    </div>
  );
};

export default ShowCard;
