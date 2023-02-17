import { fetchEvents } from 'services/eventsAPI';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <div>
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

export default EventsPage;
