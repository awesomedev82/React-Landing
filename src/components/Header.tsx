import React from "react";
import logo from "../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <div className="py-5 bg-blue-500">
      <div className="flex justify-center items-center gap-5">
        <img src={logo} width={100} height={100} alt="Logo" />
        <div className="flex flex-col gap-4 text-start">
          <h1 className="text-[2em] font-bold mt-5 text-[#333333]">
            Telegram Signal Generator (TSG)
          </h1>
          <h2 className="text-[1.5em] font-bold mb-5 text-[#555555]">Your Dedicated Signal Service, Simplified</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
