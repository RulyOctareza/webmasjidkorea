import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
const masjidsCollectionRef = collection(db, "masjids");

const getMasjids = async () => {
  const data = await getDocs(masjidsCollectionRef);

  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export { getMasjids };
