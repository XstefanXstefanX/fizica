import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { getAuth } from "firebase/auth";

const Capitol = ({ titlu, clasa }) => {
  const auth = getAuth();
  const [fileUpload, setFileUpload] = useState(null);
  const [fileName, setFileName] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false); // State to track upload success

  // UPLOAD FILES TO FIREBASE
  const upload = async () => {
    if (fileUpload == null) return;
    try {
      const fileRef = ref(
        storage,
        `${clasa}/${auth.currentUser.email}/${fileName}`
      );
      await uploadBytes(fileRef, fileUpload);
      setUploadSuccess(true); // Set upload success to true
      alert("File was uploaded");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  useEffect(() => {
    if (uploadSuccess) {
      // Reload the page after successful upload
      window.location.reload();
    }
  }, [uploadSuccess]);
  return (
    <div className="capitol-container">
      <h1 className="capitol-title">{titlu}</h1>
      <div className="capitol-uploader">
        <label className="file-choose-button">
          <span>Alege fișierul</span>
          <input
            className="file-choose-button"
            type="file"
            onChange={(e) => {
              setFileUpload(e.target.files[0]);
            }}
          />
        </label>
        <label className="nume-fisier-alege" htmlFor="nume">
          Numele fișierului:
        </label>
        <input
          name="nume"
          type="text"
          onChange={(e) => setFileName(e.target.value)}
        />
        <button className="file-upload-button" onClick={upload}>
          Trimite
        </button>
      </div>
    </div>
  );
};

export default Capitol;
