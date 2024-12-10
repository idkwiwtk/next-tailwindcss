import Search from "@/components/search";
import Image from "next/image";
import { FaAlignJustify } from "react-icons/fa";

const YoutubePage = () => {
  return (
    <main className="bg-black">
      <nav className="p-3 flex justify-between">
        {/* left */}
        <div className="flex items-center gap-3">
          <FaAlignJustify fontSize={20} />
          <Image
            src={"/youtube.svg"}
            width={120}
            height={30}
            alt={"youtube logo"}
          />
        </div>
        {/* search */}
        <div>
          <Search className={"rounded-3xl"} />
        </div>
        {/* right */}
        <div></div>
      </nav>
    </main>
  );
};

export default YoutubePage;
