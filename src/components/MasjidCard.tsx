import { Link } from "react-router-dom";
import { MasjidType } from "../types/MasjidType";

function MasjidCard(masjid: MasjidType) {
  return (
    <Link
      to={`/masjids/${masjid.id}`}
      className="flex items-stretch justify-between flex-1 overflow-hidden bg-white shadow rounded-2xl"
    >
      <div className="flex items-center justify-center overflow-hidden w-28 aspect-square rounded-2xl">
        <img
          src={masjid.imageUrl}
          alt={masjid.name}
          className="object-cover w-28 h-28"
        />
      </div>
      <div className="flex flex-col items-stretch justify-between flex-1 p-4">
        <div>
          <h2 className="text-lg font-bold ">{masjid.name}</h2>
          <p className="font-normal">{masjid.city}</p>
        </div>
        <a
          href={masjid.address}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden p-4 mt-4 text-center text-white bg-purple-600 rounded-full "
        >
          Open Kakao Map
        </a>
      </div>
    </Link>
  );
}

export default MasjidCard;
