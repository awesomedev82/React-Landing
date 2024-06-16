import React, { useState } from "react";
import SignupModal from "./SignupModal";

const GetStarted: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="">
      <h2 className="text-[1.5em] font-bold my-5 text-[#555555]">
        Get Started Today!
      </h2>
      <p className="text-[#666666]">
        Experience the future of trading signals with the Telegram Signal
        Generator. Join our growing community of satisfied traders and take your
        trading to the next level.
      </p>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="py-[10px] px-5 bg-black rounded-[5px] my-5 text-white"
      >
        Sign Up Now!
      </button>
      <SignupModal key={Math.random()} show={showModal} onClose={handleClose} />
    </div>
  );
};

export default GetStarted;
