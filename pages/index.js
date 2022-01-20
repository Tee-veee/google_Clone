import Head from "next/head";
import Image from "next/image";
import UserAvatar from "../components/UserAvatar";
import Footer from "../components/Footer";
// IMAGES
import googleLogo from "../assets/googleLogo.svg";
import { BsGridFill } from "react-icons/bs";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchEvent = (e) => {
    e.preventDefault();

    if (!searchTerm) return;

    router.push(`/search?term=${searchTerm}`);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <title>google_clone</title>
      </Head>

      {/* HEADER */}
      <header className="flex w-full justify-between p-4">
        <div className="flex items-center space-x-4">
          <p className="link_url">About</p>
          <p className="link_url">Store</p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="link_url">Gmail</p>
          <p className="link_url">Images</p>
          <BsGridFill className="h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-100" />
          <UserAvatar
            url={
              "https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj"
            }
          />
        </div>
      </header>
      {/* BODY */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        {/* NEXT JS IMAGE */}
        <Image src={googleLogo} alt="logo" />
        <div className="flex items-center w-full mt-4 max-w-md hover:shadow-lg focus-within:shadow-lg rounded-full border border-gray-400 px-4 py-2 sm:max-w-xl lg:max-w-2xl">
          <FaSearch className="mr-4 text-gray-500 cursor-pointer" />
          <input
            type="text"
            className="focus:outline-none flex-grow"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaMicrophone className="ml-4 text-gray-500 cursor-pointer" />
        </div>

        <div className="mt-8">
          <button className="search_btn mr-4" onClick={searchEvent}>
            Google Search
          </button>
          <button className="search_btn ml-4" onClick={searchEvent}>
            Im Feeling Lucky
          </button>
        </div>
      </form>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
