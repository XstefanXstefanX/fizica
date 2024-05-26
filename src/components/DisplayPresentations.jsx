import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Proiect from "./Proiect";

const DisplayPresentations = (props) => {
  const [links, setLinks] = useState([]);
  const clasa = props.class;

  useEffect(() => {
    const db = getDatabase();
    const linksRef = ref(db, "CanvaLinks/" + clasa);
    const unsubscribe = onValue(linksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const linksArray = Object.values(data);
        setLinks(linksArray);
      } else {
        setLinks([]);
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div id="prezentari-canva">
      <h2 className="projects-title">
        Produsele <span>elevilor:</span>
      </h2>
      <ul className="prezentari-canva">
        {links.map((linkObj, index) => (
          <li key={index}>
            <Proiect link={linkObj.link} />
            <h1 className="canva-creator">
              Elev: {linkObj.nume + " " + linkObj.prenume}
            </h1>
            <h1 className="canva-proiect">
              Proiect: {linkObj.denumireProiect}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayPresentations;
