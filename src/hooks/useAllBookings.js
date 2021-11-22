import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

const useAllBookings = () => {
  const [loading, setLoading] = useState(true);
  const [allBookings, setAllBookings] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://grisly-pirate-99712.herokuapp.com/allbookings")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setAllBookings(data);
      });
  }, []);

  const removeBooking = (id) => {
    Swal.fire({
      title: "Are You Yure?",
      text: "You Won't Be Able To Revert This!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://grisly-pirate-99712.herokuapp.com/allbookings/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const bookingsAfterDelete = allBookings.filter(
                (booking) => booking._id !== id
              );
              setAllBookings(bookingsAfterDelete);
            } else {
              Swal.fire("Opps!", "Something Went Wrong", "error");
            }
          });
        Swal.fire("Deleted!", "Booking Has Been Deleted", "success");
      }
    });
  };

  const updateBookingStatus = (id) => {
    const booking = allBookings.find((booking) => booking._id === id);
    if (booking.status === "completed") {
      booking.status = "pending";
    } else if (booking.status === "pending") {
      booking.status = "completed";
    }
    const url = `https://grisly-pirate-99712.herokuapp.com/allbookings/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Status Updated!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        history.push("/");
      });
  };

  return { loading, allBookings, removeBooking, updateBookingStatus };
};
export default useAllBookings;
