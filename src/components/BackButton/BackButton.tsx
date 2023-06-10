import { ButtonHTMLAttributes } from 'react';

import { useRouter } from '~/hooks/useRouter';
import { ROUTE } from '~/router/routerInfo';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backUrl?: string;
}

const BackButton = ({ backUrl }: BackButtonProps) => {
  const { routeTo } = useRouter();
  const handleClickBackButton = () => {
    const navigateLink = backUrl ?? ROUTE.HOME;
    routeTo(navigateLink);
  };
  return (
    <button onClick={handleClickBackButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-12 w-12 hover:stroke-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        />
      </svg>
    </button>
  );
};

export default BackButton;
