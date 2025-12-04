import Navbar from "../sub-components/navbar";

const Hero = () => {
  return (
    <div className="hero-container flex flex-col">
      <header className="flex flex-col h-[90vh] gap-3 items-center justify-center">
        <h1 className="text-5xl font-black">
          Scale Your Brand with Custom Tech
        </h1>
        <h4 className="font-medium text-gray-500 text-lg">
          From dynamic websites to complex software ecosystems
          <br /> we build the digital infrastructure that powers your growth.
        </h4>
        <button className="bg-accent-primary px-5 py-2 rounded-xl w-fit text-background font-semibold">
          Book Consultaion
        </button>
      </header>
    </div>
  );
};

export default Hero;
