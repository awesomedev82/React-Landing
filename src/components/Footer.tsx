import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="text-center p-[10px] mt-[20px] bg-[#333333]">
      <p className="text-[#666666] leading-[1.6] my-4">
        Transform your trading with TSG – where precision meets simplicity.
        Subscribe today for just 1 ETH per month and unlock the full potential
        of your trading strategy.
      </p>
      <p className="text-[#666666] leading-[1.6] my-4">
        Contact Us: For more information or to speak with a sales
        representative, reach out to us at{" "}
        <span className="text-white">email@example.com</span> or call [Phone
        Number].
      </p>
      <p className="text-[#666666] leading-[1.6] my-4">
        TSG – Your Path to Smarter Trading Starts Here.
      </p>
    </div>
  );
};

export default Footer;
