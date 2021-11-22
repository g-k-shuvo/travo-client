import { useEffect, useState } from "react";

const useTours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("https://grisly-pirate-99712.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTours(data);
      });
  }, []);
  return { loading, tours };
};

export default useTours;
