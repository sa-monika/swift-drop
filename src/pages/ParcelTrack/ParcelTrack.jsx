import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
const ParcelTrack = () => {
  const { trackingId } = useParams();
  const axiosInstance = useAxios();
  const { data: trackings = [] } = useQuery({
    queryKey: ["tracking", trackingId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/trackings/${trackingId}`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="bg-white rounded-xl m-5 p-3">
        <h2 className="text-secondary text-4xl  font-bold ml-3 my-4">
          Track your package: {trackingId}
        </h2>

        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box">
              First Macintosh computer
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ParcelTrack;
