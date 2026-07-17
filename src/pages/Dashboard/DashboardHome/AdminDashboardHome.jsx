import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";
const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliveryStatus = [] } = useQuery({
    queryKey: ["delivery-status-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels/delivery-status/stats");
      return res.data;
    },
  });

  console.log(deliveryStatus);

  const getPieChartData = (data) => {
    return data.map((item) => {
      return { name: item.status, value: item.count };
    });
  };

  return (
    <div>
      <div className="bg-white rounded-xl m-5 p-3">
        <h2 className="text-secondary text-4xl  font-bold ml-3 my-4">
          Admin Dashboard
        </h2>

        <div className="overflow-x-auto p-4">
          <div>
            <div className="stats shadow-md">
              {deliveryStatus.map((stat) => (
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title text-xl">{stat.status}</div>
                  <div className="stat-value text-primary">{stat.count}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[400px]">
            <PieChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "80vh",
                aspectRatio: 2,
              }}
              responsive
            >
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={getPieChartData(deliveryStatus)}
                cx="50%"
                cy="100%"
                outerRadius="120%"
                fill="#f3971b"
                label
                isAnimationActive={true}
              />
              <Legend></Legend>
              <Tooltip></Tooltip>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
