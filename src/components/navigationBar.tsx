"use client";
import { useBooleanContext } from "@/context/boolcontext";
import Link from "next/link";
import { useState } from "react";
import { FaInstagramSquare, FaWhatsapp, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImFacebook2 } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp, IoIosCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

export default function Navbar() {
  const { booleanState, toggleBooleanState } = useBooleanContext();

  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [showOurServises, setShowOurServices] = useState(false);
  const [showDiscoverSL, setShowDiscoverSL] = useState(false);

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    setIsDropdownOpen2(false);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsDropdownOpen1(false);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
    console.log(isMobileDropdownOpen);
  };
  const toggleOurServices = () => {
    setShowOurServices(!showOurServises);
    console.log(showOurServises);
  };
  const toggleDiscoverSL = () => {
    setShowDiscoverSL(!showDiscoverSL);
  };

  return (
    <>
      <div className="flex-col  lg:visible collapse h-0 mb-3 w-0 md:w-full">
        <div className="basis-2/3 bg-white text-black h-[10vh] flex justify-between font-semibold">
          <div className="items-center justify-center flex border-2 w-full">
            <img src="/logo.png" alt="" className=" scale-50 cursor-pointer" />
          </div>

          <div className=" justify-center flex md:border-2 md:w-full flex-col w-0 border-0 text-slate-700">
            <div className=" flex">
              <FaWhatsapp color="green" size={30} className=" p-1" />
              +94 72 572 1428
            </div>
            <div className=" flex">
              <IoMailOutline color="blue" size={30} className=" p-1" />
              monkeybirdtravels@gmail.com
            </div>
          </div>
          <div className=" justify-center flex border-2 w-full flex-col text-slate-700">
            <div className=" flex">
              <IoIosCall color="blue" size={30} className=" p-1" />
              +94 72 572 1428
            </div>
            <div className=" flex">
              <IoMailOutline color="blue" size={30} className=" p-1" />
              monkeybirdtravels@hotmail.com
            </div>
          </div>
          <div className="items-center justify-center flex border-2 w-full">
            <div className=" text-blue-600">
              <a href="https://www.facebook.com/monkeybirdtravels">
                <ImFacebook2
                  href="https://www.facebook.com/monkeybirdtravels"
                  size={40}
                  color=""
                  className=" hover:scale-110 cursor-pointer"
                  onClick={() => {
                    toggleOurServices();
                  }}
                />
              </a>
            </div>
            <div className="" style={{ color: "#E1306C" }}>
              <FaInstagramSquare
                href=""
                size={50}
                color=""
                className=" hover:scale-110 cursor-pointer"
              />
            </div>
            <div className="" style={{ color: "#FF0000" }}>
              <FaYoutubeSquare
                size={50}
                color=""
                className=" hover:scale-110 cursor-pointer"
              />
            </div>
            <div className="">
              <FaSquareXTwitter
                size={50}
                color="black"
                className=" hover:scale-110 cursor-pointer"
              />
            </div>
          </div>
          <div className="items-center justify-center flex border-2 w-full">
            <img
              src="/tripadvisor.png"
              alt=""
              className=" scale-50 cursor-pointer hover:scale-75"
            />
          </div>
        </div>
        <div className="basis-1/3 bg-slate-900 h-[7vh] sm:flex justify-between font-medium text-white">
          {/* First row */}
          <div className="flex justify-between w-full ">
            {" "}
            <Link
              href="/"
              className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0"
            >
              <div className="">Home</div>
            </Link>{" "}
            <Link
              href="/About-Us"
              className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0"
            >
              <div className="">About us</div>
            </Link>
            {/* Dropdown for Our Services */}
            <div className="relative w-[33.33%]">
              <div
                className="w-full bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0 h-[7vh]"
                onClick={() => toggleDropdown1()}
              >
                Our Services
                {isDropdownOpen1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isDropdownOpen1 && (
                <div className="absolute top-full left-0 w-full bg-custom-primaryblue z-10">
                  <a
                    href="Airport-Transfers"
                    className="block cursor-pointer hover:bg-custom-secondaryblue p-2 text-center"
                  >
                    Airport transfer
                  </a>
                  <a
                    href="Hire-A-Car"
                    className="block cursor-pointer hover:bg-custom-secondaryblue p-2 text-center"
                  >
                    Hire a car
                  </a>
                  <a
                    href="Private-Driver"
                    className="block cursor-pointer hover:bg-custom-secondaryblue p-2 text-center"
                  >
                    Private driver
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Second row */}
          <div className="flex justify-between w-full">
            <Link
              href="/Day-Excursions"
              className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0"
            >
              Day Excursions
            </Link>
            <Link
              href="/Tour-Packages"
              className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0"
            >
              Tour Packages
            </Link>
            <Link
              href="/Tailor-Made-Tours"
              className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0"
            >
              Tailor Made Tours
            </Link>
          </div>

          {/* Third row */}
          <div className="flex justify-between w-full">
            <Link
              href="/Destinations"
              className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0"
            >
              Destinations
            </Link>
            <Link
              href="/Things-To-Do"
              className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0"
            >
              Things to do
            </Link>
            <Link
              href="/Contact-Us"
              className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:collapse ">
        <div className=" flex w-full justify-between max-h-[10vh]">
          <div className="">
            <img
              src="/logo.png"
              alt=""
              className="cursor-pointer scale-75  h-[10vh]"
            />
          </div>
          <div className=" pr-4" onClick={toggleMobileDropdown}>
            <GiHamburgerMenu size={30} color="black" />
          </div>
        </div>{" "}
        {/* Dropdown Content */}
        {isMobileDropdownOpen && (
          <div className="">
            <ul>
              <Link href="/">
                <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                  Home
                </li>
              </Link>
              <Link href="/About-Us">
                <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                  About Us
                </li>
              </Link>
              <li
                className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium"
                onClick={() => {
                  toggleOurServices();
                }}
              >
                <div className=" flex">
                  {" "}
                  Our services{" "}
                  {showOurServises ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </li>
              {showOurServises && (
                <div>
                  {" "}
                  <Link href="/Airport-Transfers">
                    <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                      Airport transfer
                    </li>
                  </Link>
                  <Link href="/Hire-A-Car">
                    <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                      Hire a car
                    </li>
                  </Link>
                  <Link href="/Private-Driver">
                    <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                      Private Driver
                    </li>
                  </Link>
                </div>
              )}
              <Link href="/Day-Excursions">
                <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                  Day Excursions
                </li>
              </Link>
              <Link href="/Tour-Packages">
                <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                  Tour Packages
                </li>
              </Link>
              <Link href="/Tailor-Made-Tours">
                <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                  Tailor Made Tours
                </li>
              </Link>

              <Link href="/Destinations">
                <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                  Destinations
                </li>
              </Link>

              <Link href="/Things-To-Do">
                <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                  Things to do
                </li>
              </Link>

              <Link href="/Contact-Us">
                <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
