import Footer from "@/components/footer";
import Navbar from "@/components/navigationBar";
import ContactSection, {
  ContactDetails,
  QuickContact,
} from "@/components/quickcontact";
import ReviewComponent from "@/components/reviewcomponent";
import VehicleComponent from "@/app/Hire-A-Car/vehiclecomponent";
import Head from "next/head";
import Link from "next/link";
import { IoIosArrowForward, IoMdDoneAll } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import TourPackage from "@/components/tourPackage";
import Driver from "./driver";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Sri Lanka Lak Travel Destination</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white  ">
        <section className="">
          <nav className="z-20 w-screen lg:absolute">
            <Navbar />
          </nav>
          <div className="relative w-screen h-full">
            <div className="relative w-screen h-full">
              <div className="relative w-screen h-full">
                <img
                  src="https://i.imgur.com/QdhxF3S.jpg"
                  className="w-screen lg:h-screen h-[50vh] object-cover"
                  alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-white text-4xl font-bold drop-shadow-md mb-4">
                    Private driver
                  </div>
                  <div className="flex items-center text-white text-2xl font-bold drop-shadow-md">
                    <Link href="/">
                      {" "}
                      <MdHome color="" size={30} className="mr-2" />{" "}
                    </Link>
                    <span>
                      {" "}
                      <Link href="/">Home</Link>
                    </span>

                    <IoIosArrowForward color="" size={30} className="mx-2" />
                    <span>Private driver</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center bg-cover bg-center">
            <div className="bg-white bg-opacity-75 p-5 rounded-lg  text-center">
              <div className="text-4xl lg:px-16 px-5 mb-5">
                <div className="font-semibold text-blue-600">
                  Private Driver in Sri Lanka
                </div>
              </div>
              <div className=" px-5 lg:px-16 font-medium flex-1 lg:flex">
                <img
                  src="https://i.imgur.com/c2DVMJA.png"
                  className="object-cover basis-1/4 w-full lg:w-1/4 shadow-xl rounded-lg m-4 h-full"
                  alt="Background"
                />

                <div className=" basis-1/2 text-slate-800 px-4 text-justify">
                  {" "}
                  Sri Lanka Lak Dream Travel Destination – Private Driver Sri
                  Lanka is the best way to travel in Sri Lanka. Our drivers are
                  experienced and knowledgeable, and they will take care of you
                  while you’re in Sri Lanka. You can hire a private car with a
                  driver for a day, a week, or even longer. We have a wide range
                  of vehicles to choose from, and we can accommodate any budget.
                  Our drivers are also happy to help you plan your trip, and
                  they can recommend the best places to visit in Sri Lanka. So
                  if you’re looking for a stress-free way to travel in Sri
                  Lanka, call Sri Lanka Private Driver today!
                  <div className="basis-1/2 text-slate-800 p-4">
                    <ul className=" columns-1 lg:columns-2 list-disc list-inside">
                      <li className=" flex">
                        {" "}
                        <IoMdDoneAll color="red" size={25} className="mr-2" />
                        Safe
                      </li>
                      <li className=" flex">
                        {" "}
                        <IoMdDoneAll color="red" size={25} className="mr-2" />
                        Available all the time
                      </li>
                      <li className=" flex">
                        {" "}
                        <IoMdDoneAll color="red" size={25} className="mr-2" />
                        Cheap in cost
                      </li>
                      <li className=" flex">
                        {" "}
                        <IoMdDoneAll color="red" size={25} className="mr-2" />
                        Easy to book
                      </li>
                      <li className=" flex">
                        {" "}
                        <IoMdDoneAll color="red" size={25} className="mr-2" />
                        Revise the Itinerary anytime
                      </li>
                      <li className=" flex">
                        {" "}
                        <IoMdDoneAll color="red" size={25} className="mr-2" />
                        Friendly
                      </li>
                    </ul>
                  </div>
                </div>

                <ContactDetails />
              </div>
            </div>
          </div>
          <div className="text-4xl lg:px-16 px-5 mb-5 text-center font-sans">
            <div className="font-semibold text-blue-600">
              OUR PROFESSIONAL TEAM
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 w-full lg:w-[80vw] mx-auto p-5">
            <Driver
              name={"John Doe"}
              imgUrl={"https://i.imgur.com/OM4jnq8.jpg"}
              description={"PRIVATE DRIVER / GUIDE"}
            />
            <Driver
              name={"John Doe"}
              imgUrl={"https://i.imgur.com/OM4jnq8.jpg"}
              description={"PRIVATE DRIVER / GUIDE"}
            />
            <Driver
              name={"John Doe"}
              imgUrl={"https://i.imgur.com/OM4jnq8.jpg"}
              description={"PRIVATE DRIVER / GUIDE"}
            />
             <Driver
              name={"John Doe"}
              imgUrl={"https://i.imgur.com/OM4jnq8.jpg"}
              description={"PRIVATE DRIVER / GUIDE"}
            />
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
