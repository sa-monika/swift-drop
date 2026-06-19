import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };
  const handleRejected = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  const updateRiderStatus = (rider, status) => {
    const updatedInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updatedInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Rider has been approved ${status}`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };
  const handleRiderDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/riders/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // refresh the data in the ui
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Rider request has been deleted",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="bg-white rounded-xl m-5 p-3">
        <h2 className="text-secondary text-4xl  font-bold ml-3 my-4">
          Riders Pending Approval : {riders.length}
        </h2>

        <div className="overflow-x-auto text-black">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>District</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {riders.map((rider, index) => (
                <tr key={rider._id}>
                  <th>{index + 1}</th>
                  <td>{rider.name}</td>
                  <td>{rider.email}</td>
                  <td>{rider.district}</td>
                  <td>
                    <p
                      className={`${rider.status === "approved" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}`}
                    >
                      {rider.status}
                    </p>
                  </td>

                  <td className="space-x-2">
                    <button
                      onClick={() => handleApproval(rider)}
                      className="btn btn-circle hover:bg-primary"
                    >
                      <FaUserCheck size={17} />
                    </button>
                    <button
                      onClick={() => handleRejected(rider)}
                      className="btn btn-circle hover:bg-primary"
                    >
                      <IoPersonRemove size={17} />
                    </button>
                    <button
                      onClick={() => handleRiderDelete(rider._id)}
                      className="btn btn-circle hover:bg-primary"
                    >
                      <AiFillDelete size={17} />
                    </button>
                    <button
                      // onClick={() => handleRiderDelete(rider._id)}
                      className="btn btn-circle hover:bg-primary"
                    >
                      <MdPersonSearch size={17} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApproveRiders;
