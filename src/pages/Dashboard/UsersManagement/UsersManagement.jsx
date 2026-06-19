import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaUserSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeUser = (user) => {
    const roleInfo = {
      role: "admin",
    };
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      console.log(res.data);

      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.displayName} Marked as Admin`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  return (
    <div>
      <div className="bg-white rounded-xl m-5 p-3">
        <h2 className="text-secondary text-4xl  font-bold ml-3 my-4">
          Users Management : {users.length}
        </h2>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Admin Actions</th>
                <th>Others Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-circle h-12 w-12">
                          <img
                            src={user.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div className="font-bold">{user.displayName}</div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm opacity-50">{user.email}</div>
                  </td>
                  <td>{user.role}</td>
                  <td>
                    {user.role === "admin" ? (
                      <button className="btn btn-circle hover:bg-primary">
                        <FaUserSlash size={17} />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleMakeUser(user);
                        }}
                        className="btn btn-circle hover:bg-primary"
                      >
                        <FaUserShield size={17} />
                      </button>
                    )}
                  </td>
                  <td>actions</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
