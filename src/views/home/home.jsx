import { useFormStatus } from "react-dom";
import Input from "../../components/input/input";
import NavigationBar from "../../components/navbar/navigation_bar";
import Form from "../../components/form/form";
import "./home.css";
import Button from "../../components/button/button";

function Home() {
  const { pending } = useFormStatus();

  function handleForm(e) {
    e.preventDefault();
    const filesList = e.target[0].files;
    console.log(filesList);
    // TODO: Limit files size (discuss about absolute boundary with Ron)
    // TODO: Check base64 file types are congruent
    // TODO: Handle exceptions

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
    <>
      <NavigationBar />
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
