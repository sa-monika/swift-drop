import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { IoCardOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { MdDirectionsBike } from "react-icons/md";
import Logo from "../components/Logo/Logo";
import { HiUsers } from "react-icons/hi";
import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
  const { role } = useRole();
  console.log("in dashboard", role);

  return (
    <div className="drawer lg:drawer-open bg-[#EAECED]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full shadow-sm bg-white">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <RxHamburgerMenu className="size-5" />
          </label>
          <Logo></Logo>
          {/* <div className="px-4">Swift Drop Dashboard</div> */}
        </nav>
        {/* Page content here */}

        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-white shadow-sm is-drawer-close:w-14 is-drawer-open:w-64 ">
          {/* Sidebar content here */}
          <ul className="menu w-full grow space-y-1">
            {/* List item */}

            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <GoHome className="size-6" />
                <span className="is-drawer-close:hidden font-medium text-[16px]">
                  Home
                </span>
              </Link>
            </li>

            {/*our dashboard links  */}

            {/*my parcels */}
            <li>
              <NavLink
                to="/dashboard/my-parcels"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Parcels"
              >
                <BsTruck className="size-6" />
                <span className="is-drawer-close:hidden font-medium text-[16px]">
                  My Parcels
                </span>
              </NavLink>
            </li>
            {/* payment history */}
            <li>
              <NavLink
                to="/dashboard/payment-history"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Payment History"
              >
                <IoCardOutline className="size-6" />
                <span className="is-drawer-close:hidden font-medium text-[16px]">
                  Payment History
                </span>
              </NavLink>
            </li>
            {role === "admin" && (
              <>
                {/* approve riders */}
                <li>
                  <NavLink
                    to="/dashboard/approve-riders"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Approve Riders"
                  >
                    <MdDirectionsBike className="size-6" />
                    <span className="is-drawer-close:hidden font-medium text-[16px]">
                      Approve Riders
                    </span>
                  </NavLink>
                </li>
                {/* users management */}
                <li>
                  <NavLink
                    to="/dashboard/users-management"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Users Management"
                  >
                    <HiUsers className="size-6" />
                    <span className="is-drawer-close:hidden font-medium text-[16px]">
                      Users Management
                    </span>
                  </NavLink>
                </li>
              </>
            )}
            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}

                <LuSettings2 className="size-6" />
                <span className="is-drawer-close:hidden font-medium text-[16px]">
                  Settings
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
