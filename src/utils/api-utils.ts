import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { MasjidType } from "../types/MasjidType";
const masjidsCollectionRef = collection(db, "masjids");

const getMasjids: { (): Promise<MasjidType[]> } = async () => {
  const data = await getDocs(masjidsCollectionRef);

  return data.docs.map((doc) => {
    const id = doc.id;
    const {
      address,
      city,
      comunity,
      imageUrl,
      location,
      name,
      rating,
      photos1,
      photos2,
      photos3,
      photos4,
      photos5,
      photos6,
    }: DocumentData = doc.data();

    const photos: string[] = [
      String(photos1),
      String(photos2),
      String(photos3),
      String(photos4),
      String(photos5),
      String(photos6),
    ];

    return {
      id: String(id),
      address: String(address),
      city: String(city),
      comunity: String(comunity),
      imageUrl: String(imageUrl),
      location: String(location),
      name: String(name),
      rating: Number(rating),
      photos: photos,
    } as MasjidType;
  });
};

export { getMasjids };
