import { Partisipents } from "../models/Partisipents";
import { useState } from "react";
import { fixUrl } from "../utils";

const Galleri = () => {
  const [name, setName] = useState<string>("");
  const [level, setLevel] = useState<string>("");

  // Saknas: validering! Kontrollera om värdena är korrekta
  const Partisipents: Partisipents = {
    name: name,
    level: Number(),
  };

  // fungerar som "Computed properties"
  const nameIsValid = Partisipents.name !== "";
  const levelIsValid = Partisipents.level >= 0;
  const formIsValid = nameIsValid && levelIsValid;
  // Detta "måste" kompletteras med användarvänliga felmeddelanden

  const handleAddPartisipents = () => {
    fetch(fixUrl("/Partisipents"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Partisipents),
    });
    // Använd try/catch och await om du behöver hantera eventuella fel
  };

  return (
    <div className="add-Partisipents">
      <h3> Enter the Partisipents information </h3>
      <input
        type="text"
        placeholder="Partisipents name"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="level"
        onChange={(event) => setLevel(event.target.value)}
        value={level}
      />
      <button disabled={!formIsValid} onClick={handleAddPartisipents}>
        Ok add the Partisipents!
      </button>
    </div>
  );
};

export default Galleri;
