import HomePage from "./components/pages/homePage";
import Hero from "./components/ui/hero";

export default function Home() {
  return (
    <div className="main-container">
      <HomePage>
        <Hero/>
      </HomePage>
    </div>
  );
}
