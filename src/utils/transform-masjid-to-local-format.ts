import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { MasjidType } from "../types/MasjidType";

export const transformMasjidToLocalFormat: {
  (doc: QueryDocumentSnapshot<DocumentData, DocumentData>): MasjidType;
} = (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
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
};
