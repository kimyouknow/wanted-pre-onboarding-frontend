import { ElementType } from 'react';

import NotAllow from '~/pages/NotAllow';
import { ROUTE } from '~/router/routerInfo';

interface PrivateRouterProps {
  Component: ElementType;
}

const PrivateRouter = ({ Component }: PrivateRouterProps) => {
  const isLogin = true; // TODO 판단 여부 함수로 변경하기
  return isLogin ? (
    <Component />
  ) : (
    <NotAllow
      warnMessage="로그인한 유저만 접근할 수 있어요."
      fallBackUrl={ROUTE.LOGIN}
      fallbackMessage="로그인 페이지로 이동"
    />
  );
};

export default PrivateRouter;
