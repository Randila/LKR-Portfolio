import { ReactNode } from "react";
import DotGrid from "../ui/dotGrid";

interface HomePageChildrenProps {
  children: ReactNode;
}

const HomePage = ({ children }: HomePageChildrenProps) => {
  return (
    <div className="home-page-container flex flex-col">
      <div className="z-50">{children}</div>
      <div className="z-0">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="rgb(149, 165, 185 ,0.1)"
          activeColor="#fef04c"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
    </div>
  );
};

export default HomePage;
