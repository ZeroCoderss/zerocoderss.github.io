import { useState } from "react";

interface UseApiProps {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE"; // Allow other HTTP methods if needed
}

interface UseApiResponse {
  data: JSON | null;
  loading: boolean;
  error: string | null;
  fetchData: (body?: any) => Promise<JSON | null>;
}

const useApi = ({ url, method = "POST" }: UseApiProps): UseApiResponse => {
  const [data, setData] = useState<JSON | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData<T>(body: T): Promise<any> {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      const result = await response.json();
      setData(result);
      setLoading(false);

      if (!response.ok) {
        setError(result.error || "An unexpected error occurred");
      }

      return result;
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
      setLoading(false);
      return null;
    }
  }

  return { data, loading, error, fetchData };
};

export default useApi;
