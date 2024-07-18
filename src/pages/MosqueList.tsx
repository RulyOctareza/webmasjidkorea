import { useEffect, useState } from "react";
import { getMasjids } from "../utils/api-utils";
import { MasjidType } from "../types/MasjidType";
import MasjidCard from "../components/MasjidCard";

function MosqueList() {
  const [masjids, setMasjids] = useState<MasjidType[]>([]);
  const [filteredMasjids, setFilteredMasjids] = useState<MasjidType[]>([]);

  const fetchMasjid = async () => {
    const result = await getMasjids();

    setMasjids(result);
    setFilteredMasjids(result);
  };

  useEffect(() => {
    fetchMasjid();
  }, []);

  const handleSearch = (event: { target: { value: string } }) => {
    const value = event.target.value.trim().toLowerCase();

    if (value.length > 0) {
      const filterResult = masjids.filter((item) =>
        item.name.toLowerCase().includes(value)
      );

      setFilteredMasjids(filterResult);
    } else {
      setFilteredMasjids(masjids);
    }
  };
  return (
    <main className="flex flex-col items-center justify-start bg-gradient-to-tl min-h-dvh from-sky-100 to-sky-50">
      <div className="flex flex-col w-11/12 max-w-screen-xl mt-6">
        <input type="text" onChange={handleSearch} />
      </div>
      <div className="grid w-11/12 max-w-screen-xl grid-cols-1 gap-3 mt-6 md:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:mt-12 ">
        {filteredMasjids.length == 0 ? (
          <p>Tidak ditemukan</p>
        ) : (
          filteredMasjids.map((item: MasjidType, index) => {
            return <MasjidCard {...item} key={index} />;
          })
        )}
      </div>
    </main>
  );
}

export default MosqueList;
