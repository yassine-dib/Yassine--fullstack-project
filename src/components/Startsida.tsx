import { useState } from "react";
import { fixUrl } from "../utils";
import { Partisipents } from "../models/Partisipents";

const Startsida = () => {
  const [maybeData, setMaybeData] = useState<Partisipents[] | null>(null);

  const getData: () => Promise<void> = async () => {
    const response = await fetch(fixUrl("/Partisipents"));
    const data = await response.json();
    // om response.json misslyckas: kontrollera din URL, kontrollera om du får en HTML-sida
    setMaybeData(data);
  };

  return (
    <>
      <button onClick={getData}> Get Partisipents from API </button>
      <section>
        {maybeData
          ? maybeData.map((Partisipents) => (
              <p key={Partisipents.name}>
                {" "}
                {Partisipents.name} .. {Partisipents.level}points{" "}
              </p>
            ))
          : "No data yet..."}{" "}
      </section>

      <img src={fixUrl("/img/hamster-14.jpg")} />
      <img src={fixUrl("/img/hamster-15.jpg")} />
    </>
  );
};

export default Startsida;
