import { Outlet } from 'react-router-dom';

import BackButton from '~/components/BackButton/BackButton';

const LayoutFullPage = () => {
  return (
    <main className="h-screen p-10">
      <BackButton />
      <Outlet />
    </main>
  );
};

export default LayoutFullPage;
