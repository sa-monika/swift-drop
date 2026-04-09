import React from "react";
import Logo from "../../../components/logo/Logo";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 p-10">
        <aside>
          <Logo></Logo>
          Providing reliable tech since 1992
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-primary text-white font-bold p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            SwiftDrop
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
