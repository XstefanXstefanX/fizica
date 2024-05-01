import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Capitol = ({ titlu, clasa }) => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, `${clasa}/${titlu}`);

  const uploadImage = () => {
    if (imageUpload == null) return;
    // Don't upload two files with the same name
    const imageRef = ref(
      storage,
      `${clasa}/${titlu}/${imageUpload.name + v4()}`
    );
    uploadBytes(imageRef, imageUpload).then((snaphsot) => {
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
        <button className="file-upload-button" onClick={uploadImage}>
          Trimite
        </button>
      </div>
    </div>
  );
};

export default Capitol;
