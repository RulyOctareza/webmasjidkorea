import { useEffect, useState } from "react";
import { getMasjids } from "../utils/api-utils";

function TestPage() {
  const [masjids, setMasjids] = useState<unknown[]>([]);

  const fetchMasjid = async () => {
    const result = await getMasjids();
    // console.log(result);

    setMasjids(result);
  };

  useEffect(() => {
    fetchMasjid();
    console.log(masjids);
  }, []);
  return (
    <div>
      {masjids.map((item, index) => {
        return <p key={index}>{item.name}</p>;
      })}
    </div>
  );
}

export default TestPage;
