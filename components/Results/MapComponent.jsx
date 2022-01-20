import GoogleMapReact from "google-map-react";
import { useState, useEffect } from "react";
import { FaBars, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import MapMenu from "../Menus/MapMenu";
import { useRouter } from "next/router";

function MapComponent({ results }) {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [coords, setCoords] = useState({ lat: 43, lng: -74 });
  const [mapSearchTerm, setMapSearchTerm] = useState("");
  const [menu, setMenu] = useState(false);

  // SETS MAP COORDS EVERY TIME RESULTS ARE CHANGED
  useEffect(() => {
    setCoords({
      lat: results?.items[0]?.position.lat,
      lng: results?.items[0]?.position.lng,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

  // GET NEW LOCATION DETAILS EVERYTIME COORDS CHANGE
  useEffect(() => {
    const getLocationDetails = async () => {
      const data = await fetch(
        `https://browse.search.hereapi.com/v1/browse?q=${router.query.term}&at=${coords.lat},${coords.lng}&in=circle:${coords.lat},${coords.lng};r=10000&lang=en&categories=100-1100,200-2200,300-3200,400-4100&limit=100&apiKey=${process.env.hereKey}`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));

      setList(data);
    };
    getLocationDetails();
  }, [coords]);

  const submitSearch = (e) => {
    return router.push(`/maps?term=${mapSearchTerm}`);
  };

  return (
    <>
      <div className="w-full relaitve flex bg-gray-6 h-[100vh]">
        {menu && (
          <div className="flex absolute top-0 left-0 w-[100vw] h-full   z-10">
            <div className="w-[15vw]">
              <MapMenu setMenu={setMenu} />
            </div>
            <div
              className="w-[85vw] bg-black bg-opacity-25"
              onClick={() => {
                setMenu(false);
              }}
            ></div>
          </div>
        )}

        {/* LEFT COL */}
        <div className="flex flex-col w-[20vw]  p-4">
          {/* INPUT FORM */}
          <form
            className="relative rounded-lg shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="w-full flex p-2 sm:pl-10 sm:pr-20 outline-none text-xl"
              onChange={(e) => setMapSearchTerm(e.target.value)}
              value={mapSearchTerm}
            />
            <FaBars
              className="hidden sm:flex absolute top-2 left-2 text-2xl cursor-pointer hover:transition-all hover:scale-125"
              onClick={() => setMenu(true)}
            />
            <FaSearch
              className="hidden sm:flex absolute top-2 right-12 text-2xl font-light cursor-pointer hover:transition-all hover:scale-125"
              onClick={submitSearch}
            />
            <div className="">
              <AiOutlineClose className="hidden sm:flex absolute top-2 right-2 text-2xl cursor-pointer hover:transition-all hover:scale-125" />
            </div>
            <button type="submit" className="hidden"></button>
          </form>
          {/* PLACES LIST */}
          <div className="h-full w-full overflow-y-scroll">
            {list?.items?.map((listItem, index) => {
              return (
                <div
                  className="flex flex-col mb-8 p-2 mr-4 bg-gray-100 hover:shadow-xl hover:transition-all first:mt-4"
                  key={index}
                >
                  <h1 className="text-xl pl-2">{listItem.title}</h1>
                  <p className="text-sm pl-2">{listItem.address.label}</p>
                  <div className="flex flex-wrap">
                    {listItem.categories?.map((category) => {
                      return (
                        <h1
                          key={category.id}
                          className="mx-2 p-1 bg-gray-200 shadow-lg rounded-lg my-2"
                        >
                          {category.name}
                        </h1>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* MAP COL */}
        <div className="flex flex-col w-[80vw]">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.mapsReactKey,
            }}
            center={coords}
            margin={[50, 50, 50, 50]}
            defaultZoom={15}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
          >
            {/* MARKERS */}
            {list?.items &&
              list?.items?.map((listItem, index) => {
                return (
                  <FaMapMarkerAlt
                    lat={listItem.position.lat}
                    lng={listItem.position.lng}
                    key={index}
                    className="text-xl"
                  />
                );
              })}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}

export default MapComponent;
