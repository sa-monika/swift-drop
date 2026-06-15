import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const handleApproval = () => {};

  const handleRiderDelete = () => {};
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
                  <td>{rider.status}</td>

                  <td className="space-x-2">
                    <button
                      onClick={() => handleApproval(rider._id)}
                      className="btn btn-circle hover:bg-primary"
                    >
                      <FaUserCheck size={20} />
                    </button>
                    <button className="btn btn-circle hover:bg-primary">
                      <IoPersonRemove size={20} />
                    </button>
                    <button
                      onClick={() => handleRiderDelete(rider._id)}
                      className="btn btn-circle hover:bg-primary"
                    >
                      <AiFillDelete size={20} />
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
