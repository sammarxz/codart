import { useState } from "react";

type AsyncCallback<T extends any[]> = (...args: T) => Promise<void>;

export function useAsyncCallback<T extends any[]>(callback: AsyncCallback<T>) {
  const [loading, setLoading] = useState(false);

  const asyncCallback: AsyncCallback<T> = async (...args) => {
    try {
      setLoading(true);
      await callback(...args);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return [asyncCallback, loading] as const;
}
