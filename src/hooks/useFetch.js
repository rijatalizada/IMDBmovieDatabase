import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false)
    } catch (e) {
        setLoading(false)
        setError(e)
        throw new Error(e)
    }
  }, [url]);

  useEffect(() => {
    fetch()
  }, [fetch, url])

  return {data, loading, error}
};

export default useFetch;
