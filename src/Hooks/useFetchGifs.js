import { useEffect, useState } from "react";

const apiKey = "CcI6M6lMRsrXdjCASjSGkhUSvUU61mbr";

export function useFetchGifs(categoria) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoria) {
      setLoading(true);
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categoria}&limit=10`)
        .then((res) => res.json())
        .then((data) => {
          setCategories(data.data);
          setLoading(false);
        });
    }
  }, [categoria]);

  return { categories, setCategories , loading };
}
