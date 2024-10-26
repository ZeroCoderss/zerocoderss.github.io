import { getCookie } from "@/lib/cookies";
import { useState } from "react";

interface UseApiProps {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE"; // Allow other HTTP methods if needed
}

interface UseApiResponse {
  data: JSON | null;
  loading: boolean;
  error: string | null;
  fetchData: (body?: JSON) => Promise<JSON | null>;
}

const useApiWithToken = ({
  url,
  method = "POST",
}: UseApiProps): UseApiResponse => {
  const [data, setData] = useState<JSON | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (body?: JSON): Promise<JSON | null> => {
    setLoading(true);
    setError(null);
    const token = getCookie("token");

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
  };

  return { data, loading, error, fetchData };
};

export default useApiWithToken;
