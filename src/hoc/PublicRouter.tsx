import { ElementType, useEffect } from 'react';

import { useRouter } from '~/hooks/useRouter';
import { ROUTE } from '~/router/routerInfo';
import authService from '~/service/auth.service';

interface PublicRouterProps {
  Component: ElementType;
  restricted: boolean;
}

const PublicRouter = ({ Component, restricted }: PublicRouterProps) => {
  const isLogin = authService.isLogin();
  const { routeTo } = useRouter();

  const shouldFallback = () => {
    if (isLogin && restricted) {
      routeTo(ROUTE.TODO);
    }
  };

  useEffect(() => {
    shouldFallback();
  }, []);

  return <Component />;
};

export default PublicRouter;
