import Image from "next/image";

function Footer({}) {
  return (
    <footer className="bg-epm-yellow h-screen lg:flex lg:flex-wrap lg:content-center">
      <div className="container mx-auto px-8 py-8">
        <div className="lg:flex lg:flex-row">
          <div className="flex-grow">
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
                    className="w-full lg:w-auto text-center uppercase bg-epm-dark-gray text-xl border-3 border-epm-dark-gray text-white font-light rounded-3xl lg:px-16 py-1"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-row">
            <div id="footer_menu" className="footer-menu hidden lg:block">
              <div div className="container mx-auto px-8 relative">
                <nav role="navigation">
                  <ul className="leading-8">
                    <li className="font-title text-epm-dark-gray tracking-wide pb-4">
                      <a href="/about" className="block uppercase underline">
                        About
                      </a>
                    </li>
                    <li className="font-title text-epm-dark-gray tracking-wide pb-4">
                      <a href="/science" className="block uppercase underline">
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
                      <a href="/media" className="block uppercase underline">
                        Media
                      </a>
                    </li>
                    <li className="font-title text-epm-dark-gray tracking-wide pb-4">
                      <a href="/careers" className="block uppercase underline">
                        Careers
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex-grow">
              <div className="mb-4 leading-8">
                <div className="text-white uppercase">Information</div>
                <div className="font-light">
                  <a href="mailto:info@epmip.com" className="underline">
                    info@epmip.com
                  </a>
                </div>
                <div className="font-light">
                  Investor Relations:{" "}
                  <a href="mailto:ir@epmip.com" className="underline">
                    ir@epmip.com
                  </a>
                </div>
                <div className="font-light">
                  Media:{" "}
                  <a href="mailto:media@epmip.com" className="underline">
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
                    Tel: +1 (323) 307-2111
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
                <a href="#" target="_blank" rel="noopener">
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
                <a href="#" target="_blank" rel="noopener">
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
        </div>
        <div className="copyright font-sm font-title text-epm-dark-gray pt-48 hidden lg:block">
          <a href="/privacy-policy" className="underline pointer">
            Privacy Policy
          </a>
          <span> | </span>
          <a href="/term" className="underline pointer">
            Terms of Use
          </a>
          <span> | </span>
          <span>Copyright ©2021 EPM Group, Inc. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;