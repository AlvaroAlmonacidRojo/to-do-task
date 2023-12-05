import { useState } from "react";

interface RequestOptions<T> {
  url: string;
  body?: Record<string, any>;
}

interface RequestResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const usePost = <T>() => {
  const [result, setResult] = useState<RequestResult<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const postData = async ({
    url,
    body,
  }: RequestOptions<T>): Promise<RequestResult<T>> => {
    setResult({ data: null, loading: true, error: null });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        const newResult = { data, loading: false, error: null };
        setResult(newResult);
        return newResult;
      } else {
        const newResult = {
          data: null,
          loading: false,
          error: data.message || "Error",
        };
        setResult(newResult);
        return newResult;
      }
    } catch (error) {
      const newResult = { data: null, loading: false, error: "Error" };
      setResult(newResult);
      return newResult;
    }
  };

  return { ...result, postData };
};

export default usePost;
