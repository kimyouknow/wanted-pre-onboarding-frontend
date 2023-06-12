import { Outlet } from 'react-router-dom';

import Header from '~/components/Header/Header';
import GlobalNavigation from '~/modules/GlobalNavigation/GlobalNavigation';

const LayoutWithHeader = () => {
  return (
    <div className="h-screen">
      <Header className="border-b border-slate-300 px-5 py-5" />
      <div className="flex h-full">
        <GlobalNavigation className="border-r border-slate-300 px-10 py-5" />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutWithHeader;
