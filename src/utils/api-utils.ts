import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { MasjidType } from "../types/MasjidType";
import { LAST_VALIDATE_KEY, MASJIDS_KEY } from "./const";
import { transformMasjidToLocalFormat } from "./transform-masjid-to-local-format";
const masjidsCollectionRef = collection(db, "masjids");

const getMasjids: { (): Promise<MasjidType[]> } = async () => {
  const lastValidate = localStorage.getItem(LAST_VALIDATE_KEY);
  const masjids = localStorage.getItem(MASJIDS_KEY);

  const date = Date.now();

  if (masjids && lastValidate && date - Number(lastValidate) < 3_600_000) {
    const result = JSON.parse(masjids);

    return result;
  }

  try {
    const data = await getDocs(masjidsCollectionRef);
    const masjidList = data.docs.map(transformMasjidToLocalFormat);

    localStorage.setItem(LAST_VALIDATE_KEY, String(date));
    localStorage.setItem(MASJIDS_KEY, JSON.stringify(masjidList));

    return masjidList;
  } catch (error) {
    console.log(error);
    return masjids ? JSON.parse(masjids) : [];
  }
};

export { getMasjids };
