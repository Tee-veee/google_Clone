import { useRouter } from "next/router";

function HeaderOption({ Icon, title, selected, setSelected, searchTerm }) {
  const router = useRouter();

  // Checks title and uses next router to go to that page
  const changeEvent = (title) => {
    switch (title) {
      case "All":
        setSelected(title);
        return router.push(`/search?term=${searchTerm}`);
      case "Images":
        setSelected(title);
        return router.push(`/searchimages?term=${searchTerm}`);
      case "Videos":
        setSelected(title);
        return router.push(`/searchvideos?term=${searchTerm}`);
      case "News":
        setSelected(title);
        return router.push(`/searchnews?term=${searchTerm}`);
      case "Maps":
        setSelected(title);
        return router.push(`/maps?term=London`);
    }
  };

  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${
        selected === title && "text-blue-500 border-blue-500"
      }`}
      onClick={() => changeEvent(title)}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
