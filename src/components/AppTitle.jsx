export default function AppTitle(props) {
  const { title, subtitle } = props;

  return (
    <div>
      <h1>Title = {title}</h1>
      <p>Subtitle = {subtitle}</p>
    </div>
  );
}
