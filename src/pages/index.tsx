import { useEffect, useState } from "react";
import type { NextPage } from "next";

//hooks
import { useAxiosFetch } from "hooks/useAxiosFetch";

const Home: NextPage = () => {
  const [cardData, setCardData] = useState<any>([]);
  const { data } = useAxiosFetch("/cards");

  useEffect(() => {
    setCardData(data);
  }, [data]);

  console.log(cardData);

  return <div></div>;
};

export default Home;
