import Button from "../button/button";
import "./navigation_bar.css";

function NavigationBar({ setPage }) {

  const handlePageChange = (page) => {
    setPage(page);
  };


  return (
    <nav>
      <Button content="Home" onClick={() => handlePageChange("home")} />
      <Button content="About" onClick={() => handlePageChange("about")} />
    </nav>
  );
}

export default NavigationBar;
