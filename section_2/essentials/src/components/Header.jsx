import reactImage from "../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const Header = () => {
  const genRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
