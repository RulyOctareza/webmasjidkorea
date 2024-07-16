import { useEffect, useState } from "react";
import { getMasjids } from "../utils/api-utils";

function TestPage() {
  const [masjids, setMasjids] = useState<[]>([]);

  const fetchMasjid = async () => {
    const result = await getMasjids();
    // console.log(result);

    setMasjids(result as []);
  };

  useEffect(() => {
    fetchMasjid();
    console.log(masjids);
  }, []);
  return (
    <div>
      {masjids.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
}

export default TestPage;
