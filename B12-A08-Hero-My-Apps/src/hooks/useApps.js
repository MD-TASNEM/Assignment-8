import { useState, useEffect } from "react";
import axios from "axios";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/Data/apps.json");
        setApps(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching apps:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  return { apps, loading, error };
};

export default useApps;
