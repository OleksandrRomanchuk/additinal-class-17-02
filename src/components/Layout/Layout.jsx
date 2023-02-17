import Navigation from 'components/Navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();

  const onDetailsPage = pathname.includes('details');

  return (
    <>
      <header>{!onDetailsPage && <Navigation />}</header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
