import { useEffect, useState } from "react";
import { getMasjids } from "../utils/api-utils";
import { MasjidType } from "../types/MasjidType";
import MasjidCard from "../components/MasjidCard";

function MosqueList() {
  const [masjids, setMasjids] = useState<MasjidType[]>([]);

  const fetchMasjid = async () => {
    const result = await getMasjids();
    console.log(result);

    setMasjids(result);
  };

  useEffect(() => {
    fetchMasjid();
  }, []);
  return (
    <main className="flex items-start justify-center bg-gradient-to-tl from-sky-100 to-sky-200">
      <div className="grid w-11/12 max-w-screen-xl grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:mt-12 justify-items-center">
        {masjids.map((item: MasjidType, index) => {
          return <MasjidCard {...item} key={index} />;
        })}
      </div>
    </main>
  );
}

export default MosqueList;
