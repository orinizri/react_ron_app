import { useState } from "react";
import { useFormStatus } from "react-dom";
import Input from "../components/inputs/path_input";

function Home() {
  const [path, setPath] = useState("");
  const { pending } = useFormStatus();

  function handleForm(event) {
    console.log("submitting")
  }

  return (
    <form action={handleForm}>
      <Input label="path" />
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default Home;
