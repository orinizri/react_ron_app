import { useState } from "react";
import { useFormStatus } from "react-dom";
import Input from "../../components/input/input";
import "./home.css";

function Home() {
  const [path, setPath] = useState("");
  const { pending } = useFormStatus();

  function handleForm(e) {
    e.preventDefault();
    const filesList = e.target[0].files;
    console.log(filesList);
    // TODO: Limit files size (discuss about absolute boundary with ron)

    // It seems that I'm getting all the files without nested lists, I will need to differentiate between folders
    // by file.webkitRelativePath which holds a relative path of the selected folder (the root)
    
    // Filter only relevant files 
    for (let file of filesList) {
      // const fileName = file.name;
      // const fileType = file.type;
    }

    // FUTURE: Backend analysis of the files and return of an excel file 
    // summing the content of the folder and the progress with each customer
  }

  return (
    <form onSubmit={handleForm}>
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
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default Home;
