import React from "react";
import icon1 from "../assets/services/icon1.png";
import icon2 from "../assets/services/icon2.png";
import icon3 from "../assets/services/icon3.png";

export default function Services() {
  return (
    <div className="w-[100vw]">
      <div className="flex flex-col items-center">
        <h2 className="text-[40px] text-[#242A33]">Service</h2>
        <p>
          We offer youth with chances for career development in their practice.
          We also support a wide range of services to ensure client satisfaction
        </p>
      </div>
      <div className="flex flex-row w-full justify-center gap-4">
        <div className="flex flex-col w-[20%] items-center">
          <img className="size-[50%]" src={icon1} alt="" />
          <h3 className="text-[#485466] text-[20px] mt-5">
            Send Texts Instantly
          </h3>
          <p className="text-[#5A6980] text-[16px] mt-3">
            Financial planning, forecasting and adjusting rapidly with customer
            demands and budgets.
          </p>
          <button className="text-[#4E92F9] place-self-start mt-5">
            Learn More{" "}
          </button>
        </div>
        <div className="flex flex-col w-[20%] items-center">
          <img className="size-[50%]" src={icon2} alt="" />
          <h3 className="text-[#485466] text-[20px] mt-5">Better Organized</h3>
          <p className="text-[#5A6980] text-[16px] mt-3">
            Financial planning, forecasting and adjusting rapidly with customer
            demands and budgets.
          </p>
          <button className="text-[#4E92F9] place-self-start mt-5">
            Learn More{" "}
          </button>
        </div>
        <div className="flex flex-col w-[20%] items-center">
          <img className="size-[50%]" src={icon3} alt="" />
          <h3 className="text-[#485466] text-[20px] mt-5">
            Send Texts Instantly
          </h3>
          <p className="text-[#5A6980] text-[16px] mt-3">
            Financial planning, forecasting and adjusting rapidly with customer
            demands and budgets.
          </p>
          <button className="text-[#4E92F9] place-self-start mt-5">
            Learn More{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
