import HeaderOption from "./HeaderOption";

import {
  FaSearch,
  FaRegNewspaper,
  FaMapMarkerAlt,
  FaPlay,
} from "react-icons/fa";
import { HiOutlinePhotograph, HiDotsHorizontal } from "react-icons/hi";

function HeaderOptions({ selected, setSelected, searchTerm }) {
  return (
    <div className="flex justify-evenly w-full text-gray-700 bg-white text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* left */}
      <div className="flex space-x-6">
        <HeaderOption
          Icon={FaSearch}
          title="All"
          selected={selected}
          setSelected={setSelected}
          searchTerm={searchTerm}
        />
        <HeaderOption
          Icon={HiOutlinePhotograph}
          title="Images"
          selected={selected}
          setSelected={setSelected}
          searchTerm={searchTerm}
        />
        <HeaderOption
          Icon={FaPlay}
          title="Videos"
          selected={selected}
          setSelected={setSelected}
          searchTerm={searchTerm}
        />
        <HeaderOption
          Icon={FaRegNewspaper}
          title="News"
          selected={selected}
          setSelected={setSelected}
          searchTerm={searchTerm}
        />
        <HeaderOption
          Icon={FaMapMarkerAlt}
          title="Maps"
          selected={selected}
          setSelected={setSelected}
          searchTerm={searchTerm}
        />
        <HeaderOption
          Icon={HiDotsHorizontal}
          title="More"
          selected={selected}
          setSelected={setSelected}
          searchTerm={searchTerm}
        />
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 pb-4">
        <p className="link_url">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
