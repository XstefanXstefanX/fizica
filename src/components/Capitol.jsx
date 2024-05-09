import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { getAuth } from "firebase/auth";

const Capitol = ({ titlu, clasa }) => {
  const auth = getAuth();
  const [imageUpload, setImageUpload] = useState(null);
  const upload = () => {
    if (imageUpload == null) return;
    // Don't upload two files with the same name
    const imageRef = ref(
      storage,
      `${clasa}/${auth.currentUser.email}/${titlu + "|" + imageUpload.name}`
    );
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("File was uploaded");
    });
  };
  return (
    <div className="capitol-container">
      <h1 className="capitol-title">{titlu}</h1>
      <div className="capitol-uploader">
        <label htmlFor="fileInput" className="file-choose-button">
          <span>Alege fișierul</span>
          <input
            type="file"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
          />
        </label>
        <button className="file-upload-button" onClick={upload}>
          Trimite
        </button>
      </div>
    </div>
  );
};

export default Capitol;
