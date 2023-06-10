import { ElementType, useEffect } from 'react';

import { useRouter } from '~/hooks/useRouter';
import { ROUTE } from '~/router/routerInfo';
import authService from '~/service/auth.service';

interface PrivateRouterProps {
  Component: ElementType;
}

const PrivateRouter = ({ Component }: PrivateRouterProps) => {
  const { routeTo } = useRouter();
  const isLogin = authService.isLogin();

  const shouldFallback = () => {
    if (!isLogin) {
      routeTo(ROUTE.SIGN_IN);
    }
  };

  useEffect(() => {
    shouldFallback();
  }, []);

  return <Component />;
};

export default PrivateRouter;
