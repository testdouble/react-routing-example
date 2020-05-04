import React from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

const useQueryStringSync = () => {
  const location = useLocation();
  const urlParams = React.useMemo(
    () => qs.parse(location.search, { ignoreQueryPrefix: true }),
    [location.search]
  );

  const setUrlParams = React.useCallback((rawParams) => {
    const queryString = qs.stringify(rawParams);
    if (queryString !== window.location.search) {
      const newurl = `${window.location.pathname}?${queryString}`;
      window.history.replaceState({ path: newurl }, "", newurl);
    }
  }, []);

  return [urlParams, setUrlParams];
};

export default useQueryStringSync;
