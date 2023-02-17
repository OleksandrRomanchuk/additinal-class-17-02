import { useFetchEvent } from 'hooks/useFetchEvent';
import { useLocation, useNavigate } from 'react-router-dom';

const EventDetailsPage = () => {
  const event = useFetchEvent();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        Go back
      </button>
      {event && (
        <>
          <h3>{event.name}</h3>
          <img
            src={event.images[0].url}
            alt={event.name}
            style={{ width: '300px' }}
          />
          <p>{event.classifications[0].genre.name}</p>
          <p>{event.classifications[0].subGenre.name}</p>
        </>
      )}
    </div>
  );
};

export default EventDetailsPage;
