import React, { useEffect, useState } from "react";
import axios from "axios";

const Proiect = ({ link }) => {
  const [embedCode, setEmbedCode] = useState("");
  const KEY = "d49a048ac4cb5d75cd86e9";
  useEffect(() => {
    const fetchEmbedCode = async () => {
      try {
        const response = await axios.get(
          `https://iframe.ly/api/oembed?url=${link}&api_key=${KEY}`
        );
        setEmbedCode(response.data.html);
      } catch (error) {
        console.error("Error fetching embed code:", error);
      }
    };

    if (link) {
      fetchEmbedCode();
    }
  }, [link]);

  return (
    <div className="iframe-container">
      <div className="iframe" dangerouslySetInnerHTML={{ __html: embedCode }} />
    </div>
  );
};
export default Proiect;
