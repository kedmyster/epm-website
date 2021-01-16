import Image from "next/image";

function Header({}) {
  const toggleMenu = (event, menu = null) => {
    const menuItem = event.target.closest(".menu-item");

    event.preventDefault();

    if (!menu) {
      menu = document.querySelector("#menu");
    }

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");

      if (menuItem) {
        menuItem.classList.add("menu-item--open");
      }
    } else {
      menu.classList.add("hidden");

      if (menuItem) {
        menuItem.classList.remove("menu-item--open");
      }
    }
  };
  
  return (
    <>
      <header className="bg-transparent py-4 relative z-10 ">
        <div
          div
          className="container mx-auto px-8 flex flex-row items-center relative"
        >
          <div className="logo flex-grow">
            <Image
              src="/img/icons/logo.svg"
              width="66.051"
              height="20.674"
              alt=""
            />
          </div>
          <div className="menu-button">
            <button type="button" onClick={(event) => toggleMenu(event)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="#ffffff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu"
        className="menu absolute inset-x-0 z-10 bg-white bg-opacity-85 hidden"
      >
        <div div className="container mx-auto p-8 relative">
          <nav role="navigation">
            <ul>
              <li className="menu-item font-title text-epm-dark-gray tracking-wide border-b-1 border-epm-light-gray mb-3 pb-3">
                <a
                  href="/about"
                  className="block uppercase pointer relative"
                  onClick={(event) =>
                    toggleMenu(event, document.querySelector(".menu--about"))
                  }
                >
                  About
                </a>
                <ul className="menu--about hidden">
                  <li>
                    <a href="/about/story">Our story</a>
                  </li>
                  <li>
                    <a href="/about/leadership">Leadership</a>
                  </li>
                  <li>
                    <a href="/about/careers">Careers</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item font-title text-epm-dark-gray tracking-wide border-b-1 border-epm-light-gray mb-3 pb-3">
                <a href="/science" className="block uppercase pointer relative">
                  Science
                </a>
              </li>
              <li className="menu-item font-title text-epm-dark-gray tracking-wide border-b-1 border-epm-light-gray mb-3 pb-3">
                <a href="/treatments" className="block uppercase pointer relative">
                  Treatments
                </a>
              </li>
              <li className="font-title text-epm-dark-gray tracking-wide  border-b-1 border-epm-light-gray mb-3 pb-3">
                <a href="/contact" className="block uppercase pointer relative">
                  Contact
                </a>
              </li>
              <li className="font-title text-epm-dark-gray tracking-wide">
                <a href="/media" className="block uppercase pointer relative">
                  Media
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;