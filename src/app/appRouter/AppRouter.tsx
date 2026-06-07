import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Header } from '../../widgets/Header/Header';
import RacePage from '../../pages/RacePage/RacePage';
import WinnersPage from '../../pages/WinnersPage/WinnersPage';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <RacePage />,
      },
      {
        path: '/winners',
        element: <WinnersPage />,
      },
    ],
  },
]);
