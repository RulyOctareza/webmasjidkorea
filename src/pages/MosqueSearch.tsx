import { useEffect, useState } from "react";
import { getMasjids } from "../utils/api-utils";
import { MasjidType } from "../types/MasjidType";
import MasjidCard from "../components/MasjidCard";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

function MosqueSearch() {
  const [masjids, setMasjids] = useState<MasjidType[]>([]);
  const [filteredMasjids, setFilteredMasjids] = useState<MasjidType[]>([]);
  const [comunity, setComunity] = useState("");

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
      const filterResult = masjids.filter(
        (item) =>
          item.name.toLowerCase().includes(value) ||
          item.comunity.toLowerCase() == value
      );

      setComunity(value.toUpperCase());

      setFilteredMasjids(filterResult);
    } else {
      setFilteredMasjids(masjids);
    }
  };

  return (
    <main className="flex flex-col items-center justify-start bg-gradient-to-tl min-h-dvh ">
      <div className="flex flex-col w-11/12 max-w-screen-xl gap-4 p-4 mt-6 bg-white rounded-xl">
        <label htmlFor="" className="relative flex items-center">
          <MagnifyingGlassIcon className="absolute w-6 h-6 left-2 " />
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Cari Masjid"
            className="w-full p-2 pl-10 border rounded-lg border-slate-700"
          />
        </label>
        <select
          name="comunity"
          id="comunity"
          className="h-10 px-4 rounded-lg"
          value={comunity}
          onChange={handleSearch}
        >
          <option value="">Semua Komunitas</option>
          <option value="FKMID">FKMID</option>
          <option value="FKMWU">FKMWU</option>
          <option value="KMJJ">KMJJ</option>
          <option value="MITRA PUMITA">MITRA PUMITA</option>
        </select>
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

export default MosqueSearch;
