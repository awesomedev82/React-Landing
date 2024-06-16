import React from "react";

const features = [
  {
    title: "Dedicated Hardware: ",
    description:
      "Your signal service runs on its own dedicated hardware, ensuring reliability and performance.",
  },
  {
    title: "Self-Service Filters: ",
    description:
      "Easily manage and customize your signal filters within Telegram. No technical expertise needed.",
  },
  {
    title: "Comprehensive Support: ",
    description:
      "Enjoy peace of mind with our expert support team ready to assist you at every step.",
  },
];

const Features: React.FC = () => {
  return (
    <div className="">
      <h2 className="text-[1.5em] font-bold text-start my-5 text-[#555555]">
        Features
      </h2>
      <ul className="gap-[10px]">
        {features.map((feature, index) => (
          <li key={index} className="pl-[30px] my-[10px]">
            <p className="leading-5">
              <span className="font-bold">{feature.title}</span>
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
