const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-[#FFFFFF] text-[#2B69C4] py-4 px-8 flex justify-between items-center shadow-md z-50">
        <h1 className="text-2xl font-bold">UVision</h1>
        {/* <ul className="flex space-x-4">
          <li>
            <a className="py-2 px-4 rounded-lg transition duration-300 hover:bg-[#F9B52C]">
              Home
            </a>
          </li>
          <li>
            <a className="py-2 px-4 rounded-lg transition duration-300 hover:bg-[#F9B52C]">
              Check Weather
            </a>
          </li>
          <li>
            <a className="py-2 px-4 rounded-lg transition duration-300 hover:bg-[#F9B52C]">
              UV Insight
            </a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Navbar;
