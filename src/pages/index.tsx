import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import IconMark from "./icon";
import MoneyBackIcon from "./MoneyBackIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-[#6B46C1] text-white text-center w-full h-96">
        <h1 className=" font-extrabold text-5xl  pt-[90px]">
          Simple pricing for your business
        </h1>
        <h3 className="text-2xl font-medium pt-[20px] ">
          Plans that are carefully crafted to suit your business.
        </h3>
      </div>
      <div className="bg-[#F0EAFB] h-80 w-96 mt-[-121px] ml-[370px] text-center items-center">
        <h1 className="text-2xl font-bold pt-14">Premium PRO</h1>
        <h1 className="text-6xl font-bold pt-4">$360</h1>
        <h1 className="text-xl font-medium pt-2 pb-8">billed just once</h1>
        <button className="bg-[#805AD5]  w-60 h-14 text-white text-xl rounded-lg ">
          Get Started
        </button>
      </div>
      <div className="bg-[#ffffff] h-80 w-[672px] mt-[-320px] ml-[750px] rounded-lg">
        <div className="p-[40px] text-xl ">
          <h1>
            Access these features when you get this pricing package for your
            business.
          </h1>
          <div className="flex mt-5">
            <IconMark />
            <h1 className="pl-5">International calling and messaging API</h1>
          </div>
          <div className="flex mt-4">
            <IconMark />
            <h1 className="pl-5">Additional phone numbers</h1>
          </div>
          <div className="flex mt-4">
            <IconMark />
            <h1 className="pl-5">Automated messages via Zapier</h1>
          </div>
          <div className="flex mt-4">
            <IconMark />
            <h1 className="pl-5">24/7 support and consulting</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="flex ml-[430px] mt-[50px]">
          <MoneyBackIcon />
        </div>
      </div>
    </>
  );
}
