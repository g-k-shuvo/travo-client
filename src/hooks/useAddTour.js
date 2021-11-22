import { useHistory } from "react-router";
import Swal from "sweetalert2";

const useAddTour = () => {
  const history = useHistory();

  const addTour = (data) => {
    fetch("https://grisly-pirate-99712.herokuapp.com/addtour", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Item Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push("/");
        }
      });
  };

  return { addTour };
};

export default useAddTour;
