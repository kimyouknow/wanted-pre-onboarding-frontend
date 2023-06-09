import { Outlet } from 'react-router-dom';

const LayoutFullPage = () => {
  return (
    <main className="h-screen p-10">
      <Outlet />
    </main>
  );
};

export default LayoutFullPage;
