import { useFetchEvent } from 'hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';

const EventSubPage = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <div>
      {event && (
        <>
          <h3>{event.name}</h3>
          <img
            src={event.images[0].url}
            alt={event.name}
            style={{ width: '300px' }}
          />
          <Link to="details" state={location.state}>
            More details
          </Link>
        </>
      )}
    </div>
  );
};

export default EventSubPage;
