import React from "react";
import google from "../assets/home/google.png";
import mailbuster from "../assets/home/mailbuster.png";
import microsoft from "../assets/home/microsoft.png";
import netflix from "../assets/home/netflix.png";
import themewagon from "../assets/home/themewagon.png";
import illustration1 from "../assets/home/illustration1.png";
import ButtonWhite, { ButtonColor } from "./Buttons";

export default function Home() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${illustration1})` }}
        className="flex flex-col px-10 bg-no-repeat bg-right"
      >
        <h1 className="text-[51px] bg-gradient-to-r from-[#C381DB] to-[#4E92F9] bg-clip-text text-transparent font-bold">
          Bootstrap 5 theme
        </h1>

        <h2 className="text-[40px] text-[#485466]">
          crafted by <strong>Theme Wagon</strong>
        </h2>
        <p className="text-[16px] text-[#5A6980]">
          ThemeWagon offers an wide array of category-oriented
        </p>
        <p className="text-[16px] text-[#5A6980]">
          Free and Premium Bootstrap HTML Templates and Themes.
        </p>
        <ButtonColor className="w-[126px] h-[36px] mt-12 text-[16px]">
          Check Demo
        </ButtonColor>
      </div>
      <div className="flex flex-row gap-6 justify-center bg-white rounded shadow-xl py-6">
        <img className="w-[13%]" src={google} alt="logo google" />
        <img className="w-[13%]" src={mailbuster} alt="logo mailbuster" />
        <img className="w-[13%]" src={microsoft} alt="logo microsoft" />
        <img className="w-[13%]" src={netflix} alt="logo netflix" />
        <img className="w-[13%]" src={themewagon} alt="logo themewagon" />
      </div>
    </div>
  );
}
