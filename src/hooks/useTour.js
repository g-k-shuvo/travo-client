import { useEffect, useState } from "react";

const useTour = (id) => {
  const [tour, setTour] = useState({});

  useEffect(() => {
    fetch(`https://grisly-pirate-99712.herokuapp.com/tours/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTour(data);
      });
  }, [id]);
  return { tour };
};

export default useTour;
