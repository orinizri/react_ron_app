import { useFormStatus } from "react-dom";
import Input from "../../components/input/input";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import "./home.css";
import {
  FILE_SIZE_LIMIT,
  UPLOAD_FILES_VALID_TYPES,
} from "../../utils/constants";
import axiosInstance from "../../api/axiosInstance";
import { useState } from "react";

function Home() {
  const { pending } = useFormStatus();
  const [uploadStatus, setUploadStatus] = useState(null);

  function handleForm(e) {
    try {
      e.preventDefault();
      const filesList = Array.from(e.target[0].files);
      console.log(filesList);
      console.log(typeof filesList);
      const errors = [];
      if (!filesList.length) return;
      // Filter only relevant files
      const validFiles = filesList.filter((file) => {
        // Filter files above 10mb
        if (file.size > FILE_SIZE_LIMIT) {
          errors.push({
            fileName: file.name,
            error: `File is above 10MB (${file.size} bytes)`,
          });
          return false; // Exclude this file
        }
        // Filter files not word/excel/pdf -
        if (!UPLOAD_FILES_VALID_TYPES.includes(file.type)) {
          errors.push({
            fileName: file.name,
            error: `Invalid file type (${file.type})`,
          });
          return false;
        }
        return true; // Include valid files
      });
      // Got valid files
      const formData = new FormData();
      for (let i = 0; i < validFiles.length; i++) {
        formData.append("files", validFiles[i]);
      }

      // Send validFiles to backend for analysis and aggregation
      // (summing the content of the folder and the progress for each customer)
      axiosInstance
        .post("/files/upload", formData)
        .then((response) => {
          const uploadedFilesNumber = response.data.files.length || 0;
          setUploadStatus(`${uploadedFilesNumber} Files uploaded successfully!`);
        })
        .catch((error) => {
          setUploadStatus(
            `Error uploading files: ${error.response.data.message}`
          );
        });

      if (errors.length) {
        // TODO: Return errors (make them float and disappear)
        console.log("errors:", errors);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Form
        onSubmit={handleForm}
        controls={
          <>
            <Input
              label="Upload root folder"
              inputAttributes={{
                id: "folder",
                type: "file",
                className: "Input",
                webkitdirectory: "true",
                multiple: true,
              }}
            />
            <Button
              type="submit"
              disabled={pending}
              content={pending ? "Submitting..." : "Submit"}
            />
            {uploadStatus}
          </>
        }
      />
    </>
  );
}

export default Home;
