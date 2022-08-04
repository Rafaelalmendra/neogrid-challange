import { useState, useEffect } from "react";
import { api } from "services/api";

export const useAxiosFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = process.env.API_KEY;

  useEffect(() => {
    const fetchData = async (url: string) => {
      setIsLoading(true);

      try {
        const response = await api.request({
          method: "GET",
          url,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setData(response.data);
          setFetchError("");
        }
      } catch (error: any) {
        setFetchError(error.message);
        setData([]);
      } finally {
        setTimeout(() => setIsLoading(false), 2000);
      }
    };

    fetchData(url);
  }, [url, token]);

  return { data, fetchError, isLoading };
};
