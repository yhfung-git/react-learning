import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center my-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="object-contain mb-8 w-44 h-44"
      />
      <h1 className="text-xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title md:text-4xl">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
};
export default Header;
