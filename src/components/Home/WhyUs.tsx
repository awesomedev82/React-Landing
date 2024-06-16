import React from "react";

const whyus = [
  {
    title: "Accuracy and Speed: ",
    description:
      "Our advanced technology delivers precise signals faster than the competition.",
  },
  {
    title: "Customization at Your Fingertips: ",
    description:
      "Tailor your signal filters effortlessly to match your unique trading strategy.",
  },
  {
    title: "Seamless Integration: ",
    description:
      "Manage your signals directly within Telegram, making it easier than ever to stay on top of your trades.",
  },
];

const WhyUs: React.FC = () => {
  return (
    <div className="">
      <h2 className="text-[1.5em] font-bold my-5 text-[#555555]">
        Why Choose TSG?
      </h2>
      <ul className="gap-[10px]">
        {whyus.map((item, index) => (
          <li key={index} className="pl-[30px] my-[10px]">
            <p className="leading-5">
              <span className="font-bold">{item.title}</span>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyUs;
