import { useState, useEffect } from 'react';
import { fetchEventById } from 'services/eventsAPI';
import { useParams } from 'react-router-dom';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);

  return event;
};
