import { Outlet } from 'react-router-dom';

const LayoutWithHeader = () => {
  return (
    <div className="h-screen">
      <div className="flex h-full">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutWithHeader;
