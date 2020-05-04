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
    const newurl = `${window.location.protocol}//${window.location.host}${
      window.location.pathname
    }?${qs.stringify(rawParams)}`;

    window.history.pushState({ path: newurl }, "", newurl);
  }, []);

  return [urlParams, setUrlParams];
};

export default useQueryStringSync;
