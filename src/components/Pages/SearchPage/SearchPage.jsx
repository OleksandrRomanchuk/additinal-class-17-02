import { fetchEventsByName } from 'services/eventsAPI';
import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation, Outlet } from 'react-router-dom';

const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    fetchEventsByName(query).then(setEvents);
  }, [query]);

  const formSubmitHandler = event => {
    event.preventDefault();

    const form = event.target;

    const query = { query: form.query.value };

    setSearchParams(query);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label>
          <input type="text" name="query" />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {events.map(event => {
          return (
            <li key={event.id}>
              <Link to={event.id} state={{ from: location }}>
                {event.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default SearchPage;
