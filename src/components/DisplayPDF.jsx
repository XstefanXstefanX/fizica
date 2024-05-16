import React, { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const DisplayPDF = () => {
  const [pdfURL, setPdfURL] = useState(null);
  useEffect(() => {
    const storage = getStorage();
    const pathReference = ref(storage, "FIZICA_FRANA2 (2).pdf");
    getDownloadURL(pathReference)
      .then((url) => {
        setPdfURL(url);
      })
      .catch((error) => {
        console.error("Error getting download URL:", error);
      });
  }, []);

  return (
    <div className="pdf-file-container">
      {pdfURL ? (
        <embed
          className="pdf-file"
          src={pdfURL}
          type="application/pdf"
          width="400px"
          height="600px"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DisplayPDF;
