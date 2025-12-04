const Navbar = () => {
    return ( <div className="navbar-container flex flex-row border border-gray-500 p-3 rounded-2xl justify-between items-center">
        <span className="font-audiowide text-4xl">LKR<span className="text-yellow-400">.</span></span>
        <div className="nav-container flex gap-5 text-white font-medium">
            <span>About</span>
            <span>Services</span>
            <span>Portfolio</span>
            <span>Contact Us</span>
        </div>
        <button className="bg-accent-primary text-background px-5 py-2 rounded-xl font-medium">
            <span>Schedule a call</span>
        </button>
    </div> );
}
 
export default Navbar;