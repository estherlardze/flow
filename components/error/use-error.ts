export const useError = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return {
    handleRefresh,
    handleGoHome,
  };
};
