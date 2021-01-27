import Image from "next/image";

function Footer({}) {
  return (
    <footer
      className="section bg-epm-yellow h-screen lg:flex lg:flex-wrap lg:content-center"
      data-side-menu-visibility="hidden"
    >
      <div className="container mx-auto px-8 pt-12 pb-4 lg:py-8">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className="flex-grow lg:flex-grow-0">
            <div className="mb-8 lg:w-101">
              <h2 className="font-title text-6xl lg:text-8.5xl leading-tight text-epm-dark-gray">
                Join Our Journey
              </h2>
            </div>
            <div className="mb-8 lg:mb-0 lg:w-101">
              <form>
                <div className="mb-6 leading-8">
                  <input
                    type="email"
                    placeholder="Latest updates directly to your inbox"
                    className="w-full font-light rounded-3xl px-5 py-2"
                  />
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="w-full lg:w-auto text-center uppercase transition-opacity duration-150 hover:opacity-70 bg-epm-dark-gray text-xl border-3 border-epm-dark-gray text-white font-light rounded-3xl lg:px-16 py-1"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mb-12 hidden">
            <div className="mb-8">
              <h2 className="font-title text-6xl lg:text-8.5xl leading-tight text-white">
                Great :)
                <br/>
                Thank You!
              </h2>
            </div>
            <div>
             <a href="/" className="font-title text-md text-epm-dark-gray underline uppercase">Back home</a>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-grow">
              <div className="mb-4 leading-8">
                <div className="text-white uppercase">Information</div>
                <div className="font-light">
                  <a
                    href="mailto:info@epmip.com"
                    className="underline transition-opacity duration-150 hover:opacity-70"
                  >
                    info@epmip.com
                  </a>
                </div>
                <div className="font-light">
                  Investor Relations:{" "}
                  <a
                    href="mailto:ir@epmip.com"
                    className="underline transition-opacity duration-150 hover:opacity-70"
                  >
                    ir@epmip.com
                  </a>
                </div>
                <div className="font-light">
                  Media:{" "}
                  <a
                    href="mailto:media@epmip.com"
                    className="underline transition-opacity duration-150 hover:opacity-70"
                  >
                    media@epmip.com
                  </a>
                </div>
              </div>
              <div>
                <div className="mb-4 leading-8">
                  <div className="text-white uppercase">US Headquarters</div>
                  <div className="font-light">
                    1347 19th St.
                    <br />
                    Los Angeles, CA 90404
                    <br />
                    <a href="tel:1 323 307 2111"> Tel: +1 (323) 307-2111</a>
                  </div>
                </div>

                <div className="mb-4 leading-8">
                  <div className="text-white uppercase">Israel Office</div>
                  <div className="font-light">
                    121 Menachem Begin Rd.
                    <br />
                    Tel Aviv 6701203
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:hidden">
              <div className="mb-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="transition-opacity duration-150 hover:opacity-70"
                >
                  <Image
                    src="/img/icons/facebook.svg"
                    width="32"
                    height="32"
                    alt="Facebook"
                  />
                </a>
              </div>
              <div className="mb-3">
                <a
                  href="https://twitter.com/EPMIP"
                  target="_blank"
                  rel="noopener"
                  className="transition-opacity duration-150 hover:opacity-70"
                >
                  <Image
                    src="/img/icons/twitter.svg"
                    width="32"
                    height="32"
                    alt="Twitter"
                  />
                </a>
              </div>
              <div className="mb-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="transition-opacity duration-150 hover:opacity-70"
                >
                  <Image
                    src="/img/icons/instagram.svg"
                    width="32"
                    height="32"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
          <div id="footer_menu" className="footer-menu hidden lg:block">
              <div div className="container mx-auto px-8 lg:px-0 relative">
                <nav role="navigation">
                  <ul className="leading-8">
                    <li className="font-title text-epm-dark-gray tracking-wide pb-4">
                      <a
                        href="/about"
                        className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                      >
                        About
                      </a>
                    </li>
                    <li className="font-title text-epm-dark-gray tracking-wide pb-4">
                      <a
                        href="/science"
                        className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                      >
                        Science
                      </a>
                    </li>
                    <li className="font-title text-epm-dark-gray tracking-wide pb-4">
                      <a
                        href="/treatments"
                        className="block uppercase underline"
                      >
                        Treatments
                      </a>
                    </li>
                    <li className="font-title text-epm-dark-gray tracking-wide pb-4">
                      <a
                        href="/media"
                        className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                      >
                        Media
                      </a>
                    </li>
                    <li className="font-title text-epm-dark-gray tracking-wide pb-4">
                      <a
                        href="/careers"
                        className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                      >
                        Careers
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
        </div>
        <div className="copyright text-xs lg:text-sm font-title text-epm-dark-gray lg:pt-48 ">
          <a
            href="/privacy-policy"
            className="underline pointer transition-opacity duration-150 hover:opacity-70"
          >
            Privacy Policy
          </a>
          <span> | </span>
          <a
            href="/term"
            className="underline pointer transition-opacity duration-150 hover:opacity-70"
          >
            Terms of Use
          </a>
          <span className="hidden lg:inline"> | </span>
          <span className="block mt-1.5 lg:inline-block lg:mt-0">Copyright ©2021 EPM Group, Inc. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
