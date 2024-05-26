import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import { getAuth } from "firebase/auth";

const isValidCanvaLink = (link) => {
  return link.startsWith("https://www.canva.com/design");
};

const AddCanvaPresentations = (props) => {
  const clasa = props.class;
  const auth = getAuth();
  const [url, setUrl] = useState("");
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [denumireProiect, setDenumireProiect] = useState("");

  const writeUrl = (e) => {
    if (!isValidCanvaLink(url)) {
      alert("Please enter a valid Canva link");
      return; // Exit the function if the link is not valid
    }
    const db = getDatabase();
    push(ref(db, "CanvaLinks/" + clasa), {
      link: url,
      nume: nume,
      prenume: prenume,
      denumireProiect: denumireProiect,
    })
      .then(() => {
        console.log("URL added successfully");
      })
      .catch((error) => {
        console.error("Error adding URL: ", error);
      });
  };
  return (
    <div className="canva-form-container">
      <form className="canva-form" onSubmit={writeUrl}>
        <h1 className="important-title">
          <span>Adaugă</span> prezentarea ta Canva
        </h1>
        <label>
          <h1>Nume: </h1>
          <input
            type="text"
            required
            onChange={(e) => setNume(e.target.value)}
          />
        </label>
        <label>
          <h1>Prenume: </h1>
          <input
            type="text"
            required
            onChange={(e) => setPrenume(e.target.value)}
          />
        </label>
        <label>
          <h1>Denumire Proiect: </h1>
          <input
            type="text"
            required
            onChange={(e) => setDenumireProiect(e.target.value)}
          />
        </label>
        <label>
          <h1>Link prezentare: </h1>
          <input
            type="text"
            required
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button>Add Presentation</button>
      </form>
    </div>
  );
};

export default AddCanvaPresentations;
