import { useFormStatus } from "react-dom";
import Input from "../../components/input/input";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import "./home.css";
import { FILE_SIZE_LIMIT, UPLOAD_FILES_VALID_TYPES } from "../../utils/constants";

function Home() {
  const { pending } = useFormStatus();

  function handleForm(e) {
    try {
      e.preventDefault();
      const filesList = Array.from(e.target[0].files);
      console.log(filesList);
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
        if (UPLOAD_FILES_VALID_TYPES.includes(file.type)) {
          errors.push({
            fileName: file.name,
            error: `File is above 10MB (${file.size} bytes)`,
          });
          return false;
        }
        return true; // Include valid files
      });

      if (errors.length) {
        // Show errors (floating)
        console.log("errors:", errors)
      }
      // TODO: Send validFiles to backend for analysis and aggregation
      // (summing the content of the folder and the progress for each customer)

      // It seems that I'm getting all the files without nested lists, I will need to differentiate between folders
      // by file.webkitRelativePath which holds a relative path of the selected folder (the root)
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
          </>
        }
      />
    </>
  );
}

export default Home;
