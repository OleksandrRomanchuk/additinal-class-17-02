import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import EventsPage from './Pages/EventsPage/EventsPage';
import Layout from './Layout/Layout';
import EventSubPage from './Pages/EventSubPage/EventSubPage';
import EventDetailsPage from './Pages/EventDetailsPage/EventDetailsPage';
import SearchPage from './Pages/SearchPage/SearchPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventSubPage />} />
        </Route>
        <Route path="events/:id/details" element={<EventDetailsPage />} />
        <Route path="search" element={<SearchPage />}>
          <Route path=":id" element={<EventSubPage />} />
        </Route>
        <Route path="search/:id/details" element={<EventDetailsPage />} />
      </Route>
    </Routes>
  );
};
