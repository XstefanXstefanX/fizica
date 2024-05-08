import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { getAuth } from "firebase/auth";

const Capitol = ({ titlu, clasa }) => {
  const auth = getAuth();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imageListRef = ref(
    storage,
    `${clasa}/${auth.currentUser.email}/${titlu}`
  );
  const uploadImage = () => {
    if (imageUpload == null) return;
    // Don't upload two files with the same name
    const imageRef = ref(
      storage,
      `${clasa}/${auth.currentUser.email}/${titlu}`
    );
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("File was uploaded");
    });
  };
  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
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
