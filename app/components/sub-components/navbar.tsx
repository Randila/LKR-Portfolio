import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar-container flex flex-row border border-gray-500 p-3 rounded-2xl justify-between items-center">
      <Link href={"/"}>
        <span className="font-audiowide text-4xl">
          LKR<span className="text-yellow-400">.</span>
        </span>
      </Link>
      <div className="flex-1 spacer"></div>
      <div className="nav-container flex gap-5 text-white font-medium self-center">
        <Link href={"/about-us"}>
          <span>About</span>
        </Link>
        <Link href={"#"}>
          <span>Services</span>
        </Link>
        <Link href={"#"}>
          <span>Portfolio</span>
        </Link>
        <Link href={"/contact-us"}>
          <span>Contact Us</span>
        </Link>
      </div>
      <div className="flex-1 spacer"></div>
      <button className="bg-accent-primary text-background px-5 py-2 rounded-xl font-medium">
        <span>Schedule a call</span>
      </button>
    </div>
  );
};

export default Navbar;
