import React, { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll, getMetadata } from "firebase/storage";
import { storage } from "../firebase";

const DisplayPDF = ({ clasa }) => {
  const [pdfLinks, setPDFLinks] = useState([]);

  useEffect(() => {
    const fetchPDFLinks = async () => {
      try {
        // Reference to the class directory in Firebase Storage
        const classRef = ref(storage, `${clasa}/`);
        // List all user directories within the class directory
        const userDirs = await listAll(classRef);

        // Initialize an array to hold the download URLs and metadata
        let allLinks = [];

        // Loop through each user directory
        for (const userDir of userDirs.prefixes) {
          // List all items (PDFs) in the user directory
          const userFiles = await listAll(userDir);

          // Get download URLs and metadata for all items
          const userLinks = await Promise.all(
            userFiles.items.map(async (item) => {
              const downloadURL = await getDownloadURL(item);
              const metadata = await getMetadata(item);
              return { downloadURL, metadata };
            })
          );

          // Append the user's links to the allLinks array
          allLinks = [...allLinks, ...userLinks];
        }
        // Update state with the fetched links
        setPDFLinks(allLinks);
      } catch (error) {
        console.error("Error fetching PDF links:", error);
      }
    };

    if (clasa) {
      fetchPDFLinks();
    }
  }, [clasa]);

  return (
    <>
      {pdfLinks != "" && (
        <div className="pdf-file-container" id="prezentari-ppt">
          <h1>
            <span>Prezentările</span> powerpoint:
          </h1>
          <ul>
            {pdfLinks.map((linkObj, index) => (
              <li key={index}>
                <a
                  href={linkObj.downloadURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descarcă prezentarea: {JSON.stringify(linkObj.metadata.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default DisplayPDF;
