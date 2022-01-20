import googleLogo from "../../assets/googleLogo.svg";
import Image from "next/image";
import { AiOutlineClose, AiFillPrinter } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import {
  MdLayers,
  MdFlag,
  MdPersonPinCircle,
  MdMessage,
  MdTimeline,
  MdSecurity,
  MdInsertLink,
} from "react-icons/md";
import { useRouter } from "next/router";

function MapMenu({ setMenu }) {
  const router = useRouter();

  return (
    <div className="flex-col p-6 w-full h-full bg-white">
      {/* LOGO DIV */}
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center">
          <Image
            src={googleLogo}
            className="cursor-pointer"
            onClick={() => router.push("/")}
            height={40}
            width={120}
            alt="logo"
          />
          <h1 className="text-2xl text-gray-700 ml-1 font-medium">Maps</h1>
        </div>
        <AiOutlineClose
          className="text-2xl cursor-pointer hover:transition-all hover:scale-125"
          onClick={() => setMenu(false)}
        />
      </div>
      {/*  */}
      <div className="flex items-center justify-between p-2 py-4 mt-4 hover:text-blue-500 hover:bg-gray-100 cursor-pointer border-b-2 border-gray-100">
        <div className="flex items-center">
          <MdLayers className="text-2xl" />
          <div className="flex flex-col ml-8">
            <h1>Terrain, Traffic {"&"} more</h1>
            <p className="text-sm text-gray-400">Layers have moved</p>
          </div>
        </div>
        <FiChevronRight className="text-2xl" />
      </div>
      <div className="flex  p-2 py-4 hover:text-blue-500 hover:bg-gray-100 cursor-pointer ">
        <div className="flex">
          <MdFlag className="text-2xl" />
          <div className="flex flex-col ml-8">
            <h1>Your Places</h1>
          </div>
        </div>
      </div>
      <div className="flex f p-2 py-4 hover:text-blue-500 hover:bg-gray-100 cursor-pointer ">
        <div className="flex">
          <MdMessage className="text-2xl" />
          <div className="flex flex-col ml-8">
            <h1>Your Contributions</h1>
          </div>
        </div>
      </div>
      <div className="flex f p-2 py-4 hover:text-blue-500 hover:bg-gray-100 cursor-pointer ">
        <div className="flex">
          <MdPersonPinCircle className="text-2xl" />
          <div className="flex flex-col ml-8">
            <h1>Location Sharing</h1>
          </div>
        </div>
      </div>
      <div className="flex f p-2 py-4 hover:text-blue-500 hover:bg-gray-100 cursor-pointer ">
        <div className="flex">
          <MdTimeline className="text-2xl" />
          <div className="flex flex-col ml-8">
            <h1>Your Timeline</h1>
          </div>
        </div>
      </div>
      <div className="flex f p-2 py-4 hover:text-blue-500 hover:bg-gray-100 cursor-pointer border-b-2 border-gray-100">
        <div className="flex">
          <MdSecurity className="text-2xl" />
          <div className="flex flex-col ml-8">
            <h1>Your Data in maps</h1>
          </div>
        </div>
      </div>
      <div className="flex f p-2 py-4 hover:text-blue-500 hover:bg-gray-100 cursor-pointer ">
        <div className="flex">
          <MdInsertLink className="text-2xl" />
          <div className="flex flex-col ml-8">
            <h1>Share or embed map</h1>
          </div>
        </div>
      </div>
      <div className="flex f p-2 py-4 hover:text-blue-500 hover:bg-gray-100 cursor-pointer ">
        <div className="flex">
          <AiFillPrinter className="text-2xl" />
          <div className="flex flex-col ml-8">
            <h1>Print</h1>
          </div>
        </div>
      </div>
      <h1 className="hover:text-blue-500 p-2 py-2 cursor-pointer">
        Add a missing place
      </h1>
      <h1 className="hover:text-blue-500 p-2 py-2 cursor-pointer">
        Add your business
      </h1>
      <h1 className="hover:text-blue-500 p-2 py-2 cursor-pointer border-b-2 border-gray-100">
        Edit the map
      </h1>
      <h1 className="hover:text-blue-500 p-2 py-2 cursor-pointer">
        Take a tour
      </h1>
      <h1 className="hover:text-blue-500 p-2 py-2 cursor-pointer">
        Tips and tricks
      </h1>
      <h1 className="hover:text-blue-500 p-2 py-2 cursor-pointer">Get help</h1>
      <h1 className="hover:text-blue-500 p-2 py-2 cursor-pointer border-b-2 border-gray-100">
        Consumer information
      </h1>
      <h1 className="hover:text-blue-500 p-2 py-2 cursor-pointer">Languages</h1>
      <h1 className="hover:text-blue-500 p-2 py-2 cursor-pointer">
        Search settings
      </h1>
      <h1 className="hover:text-blue-500 p-2 py-2 cursor-pointer border-b-2 border-gray-100">
        Maps activity
      </h1>
    </div>
  );
}

export default MapMenu;
