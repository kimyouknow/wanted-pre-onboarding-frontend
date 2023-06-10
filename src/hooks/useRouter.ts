import { useNavigate } from 'react-router-dom';

export const useRouter = () => {
  const navigate = useNavigate();

  const refreshWindow = () => {
    location.reload();
  };

  return {
    currentPath: window.location.pathname,
    routeTo: (path: string) => navigate(path),
    refreshWindow,
  };
};
