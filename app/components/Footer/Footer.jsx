import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/img/logo2.png";
import mada from "../../../public/img/mada.png";
import marof from "../../../public/img/logo-xl.svg";
import visa from "../../../public/img/visa.png";
import apple from "../../../public/img/apply.webp";
import master from "../../../public/img/master.png";
import stc from "../../../public/img/stc.svg";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiTwotoneMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="bg-slate-500 flex flex-col md:flex-row w-full justify-between items-center h-auto md:h-[300px] p-3">
        <div className=" w-full md:w-1/2 flex flex-col items-center justify-center">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" className="w-[100px]" />
          </Link>
          <p className="w-[90%]">
            We&apos;re a platform that connects home bakers with customers who
            want delicious cakes delivered to their doorstep. Our easy-to-use
            online shop creation tools and supply chain partnerships make it
            simple for bakers to expand their reach and access high-quality
            ingredients. We&apos;re passionate about supporting local businesses
            and creating meaningful connections in the baking community. Join us
            in our mission to digitize the industry!
          </p>{" "}
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap justify-between items-center">
          <Image src={apple} alt="logo" className="w-[100px]" />
          <Image src={mada} alt="logo" className="w-[100px]" />
          <Image src={marof} alt="logo" className="w-[100px]" />
          <Image src={master} alt="logo" className="w-[100px]" />
          <Image src={stc} alt="logo" className="w-[100px]" />
        </div>
      </div>
      <div className="w-[90%] bg-slate-100 m-auto text-[#ef6565] p-2 flex justify-between items-center">
        <p>
          ©2023
          <Link href="#" className="text-[#4cc0ff]">
            {` BAKESPACE`}
          </Link>
        </p>
        <div className="flex gap-5 text-[#4cc0ff]">
          <a href="/">
            <AiFillTwitterCircle className="cursor-pointer transition-all duration-300 hover:text-[#ef6565] hover:text-2xl" />
          </a>
          <a href="/">
            <AiFillInstagram className="cursor-pointer transition-all duration-300 hover:text-[#ef6565] hover:text-2xl" />
          </a>
          <a href="/">
            <AiTwotoneMail className="cursor-pointer transition-all duration-300 hover:text-[#ef6565] hover:text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
