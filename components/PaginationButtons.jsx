import Link from "next/link";
import { useRouter } from "next/router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
          passHref
        >
          <div className="flex flex-col glex-grow items-center cursor-pointer hover:underline">
            <FaChevronLeft />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link
        href={`/search?term=${router.query.term}&start=${startIndex + 10}`}
        passHref
      >
        <div className="flex flex-col glex-grow items-center cursor-pointer hover:underline">
          <FaChevronRight />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
