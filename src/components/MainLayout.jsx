import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import AppTitle from './AppTitle';
const MainLayout = () => {
  return (
    <div>
      <AppTitle title="Box-Office" subtitle="Place for Fav Shows/Movies" />

      <Nav />

      <Outlet />
    </div>
  );
};

export default MainLayout;
