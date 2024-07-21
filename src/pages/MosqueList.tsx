import { useEffect, useState } from "react";
import { getMasjids } from "../utils/api-utils";
import { MasjidType } from "../types/MasjidType";
import MasjidCard from "../components/MasjidCard";
import { MagnifyingGlassIcon, SunIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function MosqueList() {
  const [masjids, setMasjids] = useState<MasjidType[]>([]);

  const fetchMasjid = async () => {
    const result = await getMasjids();

    setMasjids(result);
  };

  useEffect(() => {
    fetchMasjid();
  }, []);

  return (
    <main className="flex flex-col items-center justify-start bg-gradient-to-tl min-h-dvh">
      <div className="sticky top-0 flex flex-col w-11/12 gap-4 py-6 bg-white ">
        <header className="flex items-center justify-between ">
          <h1 className="flex-1 text-2xl font-semibold w-fit">Explore Now</h1>
          <div className="flex gap-4">
            <button className="text-slate-600">
              {<SunIcon width={24} height={24} />}
            </button>
            <Link to={"/search"} className="text-slate-600">
              {<MagnifyingGlassIcon width={24} height={24} />}
            </Link>
          </div>
        </header>
        <p className="text-xl text-slate-700">Yuk Ke Masjid Terdekat</p>
      </div>
      <h2 className="w-11/12 text-xl">Masjid-masjid Korea</h2>
      <div className="flex w-11/12 gap-2 py-4 overflow-x-scroll">
        {[0, 1, 2, 3, 4, 5].map((_, index) => {
          return (
            <img
              key={index}
              src="images/logo.png"
              alt="logo kmii"
              className="w-28 h-28"
            />
          );
        })}
      </div>
      <div className="grid w-11/12 max-w-screen-xl grid-cols-1 gap-3 mt-6 md:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:mt-12 ">
        <h2 className="text-xl">Rekomendasi Masjid</h2>
        {masjids.length == 0 ? (
          <p>Tidak ditemukan</p>
        ) : (
          masjids.slice(0, 6).map((item: MasjidType, index) => {
            return <MasjidCard {...item} key={index} />;
          })
        )}
      </div>
    </main>
  );
}

export default MosqueList;
