import { useState, useEffect } from "react";


function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("Fetching data from:", url); // Log URL to see the correct URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        
        setData(result); // Set the data from the response
      } catch (err) {
        setError(err.message); // Set error message if there's an issue
      } finally {
        setLoading(false); // Loading finished
      }
    };

    fetchData();
  }, [url]); // Trigger useEffect when URL changes

  return { data, error, loading };
}

export default useFetch;
