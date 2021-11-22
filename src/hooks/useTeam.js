import { useEffect, useState } from "react";

const useTeam = () => {
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://grisly-pirate-99712.herokuapp.com/team")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTeam(data);
      });
  }, []);
  return { loading, team };
};

export default useTeam;
