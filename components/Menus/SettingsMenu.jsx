import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdRadioButtonChecked } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

function SettingsMenu({ setSearchSettings }) {
  return (
    <div className="flex absolute top-0 left-0 w-full h-[100vh] ">
      <div
        className="w-[82vw] h-full bg-black opacity-30"
        onClick={() => setSearchSettings(false)}
      ></div>
      <div className="w-[18vw] h-full bg-white p-4 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Quick Settings</h1>
          <AiOutlineClose
            className="mb-4 text-xl cursor-pointer"
            onClick={() => setSearchSettings(false)}
          />
        </div>
        <div className="pb-6 border-b-2 border-gray-200">
          <button className="flex items-center justify-center px-2 py-3 w-full mt-2 border-2 border-gray-200 rounded-lg hover:bg-gray-200">
            <p className="text-blue-500"> See all settings</p>
          </button>
        </div>
        <div className="space-y-2 mt-4 border-b-2 border-gray-200 pb-6">
          <h1 className="text-2xl">Privacy</h1>
          <div className="flex items-center justify-between hover:bg-gray-200 hover:transition-all cursor-pointer rounded-sm py-2 px-1">
            <h2>Search history</h2>
            <BsBoxArrowUpRight className="text-xl" />
          </div>
          <div className="flex items-center justify-between hover:bg-gray-200 hover:transition-all cursor-pointer rounded-sm py-2 px-1">
            <h2>Your data in Search</h2>
            <BsBoxArrowUpRight className="text-xl" />
          </div>
        </div>
        <div className="space-y-2 mt-4 border-b-2 border-gray-200 pb-6">
          <h1 className="text-2xl">Using Search</h1>
          <div className="flex items-center justify-between hover:bg-gray-200 hover:transition-all cursor-pointer rounded-sm py-2 px-1">
            <div className="flex flex-col">
              <h2>Explicit Results Filter</h2>
              <p className="text-sm text-blue-500">
                Learn more about SafeSearch
              </p>
            </div>
            <MdRadioButtonChecked className="text-xl" />
          </div>
          <div className="flex items-center justify-between hover:bg-gray-200 hover:transition-all cursor-pointer rounded-sm py-2 px-1">
            <h2>Languages</h2>
            <h2 className="text-gray-400 text-xl">English</h2>
          </div>
          <div className="flex items-center justify-between hover:bg-gray-200 hover:transition-all cursor-pointer rounded-sm py-2 px-1">
            <h2>Advanced Search</h2>
            <BsBoxArrowUpRight className="text-xl" />
          </div>
        </div>
        <div className="space-y-2 mt-4 border-b-2 border-gray-200 pb-6">
          <h1 className="text-2xl">Appearance</h1>
          <div className="flex items-center justify-between hover:bg-gray-200 hover:transition-all cursor-pointer rounded-sm py-2 px-1">
            <div className="flex items-center">
              <MdRadioButtonChecked className="text-xl mr-4" />
              <p>Light Theme</p>
            </div>
            <CgWebsite className="text-3xl" />
          </div>
          <div className="flex items-center justify-between hover:bg-gray-200 hover:transition-all cursor-pointer rounded-sm py-2 px-1">
            <div className="flex items-center">
              <MdRadioButtonChecked className="text-xl mr-4" />
              <p>Dark Theme</p>
            </div>
            <CgWebsite className="text-3xl" />
          </div>
          <div className="flex items-center justify-between hover:bg-gray-200 hover:transition-all cursor-pointer rounded-sm py-2 px-1">
            <div className="flex items-center">
              <MdRadioButtonChecked className="text-xl mr-4" />
              <p>Device Default</p>
            </div>
            <CgWebsite className="text-3xl" />
          </div>
        </div>
        <div className="space-y-2 mt-4 border-b-2 border-gray-200 pb-6">
          <h1 className="text-2xl">Support</h1>
          <div className="flex items-center justify-between hover:bg-gray-200 hover:transition-all cursor-pointer rounded-sm py-2 px-1">
            <h1>Search Help</h1>
            <BsBoxArrowUpRight className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsMenu;
