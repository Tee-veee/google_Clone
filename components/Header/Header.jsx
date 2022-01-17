import Image from "next/image";
import HeaderOptions from "./HeaderOptions";
import googleLogo from "../../assets/googleLogo.svg";
import { useRouter } from "next/router";
import UserAvatar from "../UserAvatar";
import { useState, useEffect } from "react";
// ICONS
import { AiOutlineClose, AiFillSetting } from "react-icons/ai";
import { FaMicrophone, FaSearch } from "react-icons/fa";

import SettingsMenu from "../Menus/SettingsMenu";

function Header({ All, Images, Videos, News, Maps }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("All");
  const [searchSettings, setSearchSettings] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (All) {
      setSelected("All");
    } else if (Images) {
      setSelected("Images");
    } else if (Videos) {
      setSelected("Videos");
    } else if (News) {
      setSelected("News");
    } else if (Maps) {
      setSelected("Maps");
    }
  }, []);

  useEffect(() => {
    setSearchTerm(router.query.term);
  }, [All, Images, Videos]);

  const searchEvent = (e) => {
    e.preventDefault();

    if (!searchTerm) return;

    // CHECKS TYPE OF SELECTED HEADER OPTION
    switch (selected) {
      case "All":
        return router.push(`/search?term=${searchTerm}`);
      case "Images":
        return router.push(`/searchimages?term=${searchTerm}`);
      case "Videos":
        return router.push(`/searchvideos?term=${searchTerm}`);
      case "News":
        return router.push(`/searchnews?term=${searchTerm}`);
    }
  };

  return (
    <header className="sticky top-0 w-full bg-white h-[14vh]">
      <div className="flex w-full  p-6 items-center relative">
        {searchSettings && (
          <SettingsMenu setSearchSettings={setSearchSettings} />
        )}
        {/* NEXT.JS IMAGE COMPONENT */}
        <div className="flex w-full">
          <Image
            src={googleLogo}
            onClick={() => router.push("/")}
            className="cursor-pointer"
            height={40}
            width={120}
          />
          <form className="flex border border-gray-200 rounded-full  max-w-3xl items-center px-6 py-4 ml-10 mr-6 w-full hover:shadow-lg focus-within:shadow-lg">
            <input
              value={searchTerm}
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex flex-grow w-full focus:outline-none "
            />
            <AiOutlineClose
              className="text-xl cursor-pointer hover:transition-all hover:scale-125 sm:mr-2"
              onClick={() => setSearchTerm("")}
            />
            <div className="border-l-2 border-gray-300">
              <FaMicrophone className="text-2xl cursor-pointer hover:transition-all hover:scale-125 hidden sm:inline-flex ml-2 text-blue-500 mr-4" />
            </div>
            <div onClick={searchEvent}>
              <FaSearch className="text-xl cursor-pointer hover:transition-all hover:scale-125 mr-2 hidden sm:inline-flex" />
            </div>
            <button hidden type="submit" onClick={searchEvent}>
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center">
          <div
            className="hover:bg-gray-200 p-2 mr-4 rounded-full"
            onClick={() => setSearchSettings(true)}
          >
            <AiFillSetting className=" text-3xl" />
          </div>

          <UserAvatar
            url={
              "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
            }
            className="ml-auto"
          />
        </div>
      </div>

      <HeaderOptions
        selected={selected}
        setSelected={setSelected}
        searchTerm={searchTerm}
      />
    </header>
  );
}

export default Header;
