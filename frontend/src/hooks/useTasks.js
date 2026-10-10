import { useState, useEffect } from 'react';
import { fetchTasks } from '../api';

export function useTasks(query, status, page, pageSize) {
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadTasks() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchTasks({
          query,
          status,
          page,
          pageSize,
        });

        if (!cancelled) {
          setTasks(data.items);
          setTotal(data.total);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadTasks();

    return () => {
      cancelled = true;
    };
  }, [query, status, page, pageSize]);

  return { tasks, total, loading, error };
}
