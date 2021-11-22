import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const useMyBookings = () => {
  const [loading, setLoading] = useState(true);
  const [myBookings, setMyBookings] = useState([]);
  const { user } = useAuth();

  const { email } = user;

  useEffect(() => {
    fetch(`https://grisly-pirate-99712.herokuapp.com/mybookings/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMyBookings(data);
      });
  }, [email]);

  const removeBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://grisly-pirate-99712.herokuapp.com/mybookings/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const bookingsAfterDelete = myBookings.filter(
                (booking) => booking._id !== id
              );
              setMyBookings(bookingsAfterDelete);
            } else {
              Swal.fire("Opps!", "Something Went Wrong", "error");
            }
          });
        Swal.fire("Deleted!", "Booking Has Been Cancelled!", "success");
      }
    });
  };

  return { loading, myBookings, removeBooking };
};

export default useMyBookings;
