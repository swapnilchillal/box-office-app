import { Link } from 'react-router-dom';

const LINK = [
  {
    text: 'home',
    to: '/',
  },
  {
    text: 'starred',
    to: '/starred',
  },
];

const Nav = () => {
  return (
    <div>
      <ul>
        {LINK.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
