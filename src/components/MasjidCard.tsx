import { MasjidType } from "../types/MasjidType";

function MasjidCard(masjid: MasjidType) {
  return (
    <div className="flex flex-col justify-between overflow-hidden bg-white shadow-xl max-w-96 rounded-2xl">
      <div className="flex items-center justify-center w-full aspect-square">
        <img src={masjid.imageUrl} alt="" className="object-fill w-full" />
      </div>
      <div className="flex flex-col items-stretch justify-between flex-1 p-4">
        <div>
          <h2 className="text-xl font-bold mdtext-3xl ">{masjid.name}</h2>
          <p className="font-normal">{masjid.city}</p>
          <p className="font-normal">{masjid.comunity}</p>
        </div>
        <a
          href={masjid.address}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 mt-4 text-center text-white bg-purple-600 rounded-full"
        >
          Open Kakao Map
        </a>
      </div>
    </div>
  );
}

export default MasjidCard;
