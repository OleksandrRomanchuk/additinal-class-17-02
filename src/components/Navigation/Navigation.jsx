import { Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
