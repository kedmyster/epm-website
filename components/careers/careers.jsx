import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import SectionHeader from "../shared/SectionHeader";

function CareersComponent({ positions = [] }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (windowWidth > 1024) {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    } else if (windowWidth > 768) {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    document.body.dataset.headerTheme = "dark";
  }, []);

  if (positions && positions.length === 1) {
    return (
      <section
        id="careers"
        className="section careers bg-white relative w-full bg-cover text-center flex flex-wrap content-top lg:h-screen"
        data-side-menu-label="Careers"
        data-side-menu-color="light"
        data-side-menu-visibility="hidden"
        data-header-menu-visibility="visible"
      >
        <div className="absolute w-full h-full">
          {isMobile && (
            <Image
              src="/img/mobile/careers/careers@2x.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
          {isDesktop && (
            <Image
              src="/img/desktop/careers/careers@2x.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
        </div>
        <div className="relative container mx-auto py-8 px-8 lg:flex lg:flex-col lg:justify-center">
          <div className="mb-6 lg:mb-0 ">
            <SectionHeader
              name="Our Opportunities"
              title={<h2>Shape the Future of Healthcare </h2>}
            />
          </div>
          <div className="text lg:text-epm-base lg:w-container lg:mx-auto lg:mt-6">
            <p className="mb-4 lg:mb-8 lg:mx-20">
              We are a fast-paced and dynamic company, striving to develop new
              medicine and create safer treatments for patients by collaborating
              with leading pharmaceutical companies.
            </p>
            <p className="lg:mx-20">
              We believe in helping people live a higher quality of life.
            </p>
            <p>
              We are looking for enthusiastic and talented individuals who
              thrive on challenges and a dynamic work environment<br/>as well as
              people who are passionate to impact through actual results.
            </p>
          </div>
          <div className="font-bold text-lg lg:text-xl lg:mx-auto mt-4 lg:mt-8 lg:w-103 lg:px-2">
            <p className="mb-4 lg:mb-8">
              Looking to join a dynamic company, and be part of a team that
              shapes the future of healthcare?
            </p>
            <p className="mb-4 lg:mb-8">
              We’d love to hear from you.
            </p>
            <a
              href="mailto:jobs@epmip.com"
              className="underline lg:no-underline inline-block lg:pb-8"
            >
              jobs@epmip.com
            </a>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        id="careers"
        className="section careers bg-white relative w-full flex flex-wrap lg:flex-row lg:h-screen"
        data-side-menu-label="Careers"
        data-side-menu-color="light"
        data-side-menu-visibility="visible"
      >
        <div className="lg:flex-shrink-0 lg:pl-56 lg:w-5/12">
          <div className="container mx-auto px-8 lg:pr-0 lg:ml-0 py-8 lg:max-w-none lg:w-96 ">
            <div className="mb-6 lg:mb-0">
              <SectionHeader name="Our story" title={<h2>Leadership</h2>} />
            </div>
            <div className="text lg:text-epm-base">
              <p className="mb-4">
                We are a fast-paced and dynamic company, striving to develop new
                medicines and to enable safer treatments for patients, by
                collaborating with leading pharmaceutical companies.
              </p>
              <p className="mb-4">
                We believe in making a difference and helping people live a life
                of higher quality.
              </p>
              <p>
                We are looking for enthusiastic and talented individuals who
                thrive on challenges and a dynamic work environment, and are
                passionate to make a difference through the delivery of results.
              </p>
            </div>
            <div className="job-openings lg:text-epm-base mt-4 lg:mt-8 lg:w-96">
              <div className="lg:text-epm-base mb-4 lg:mb-8">Job Openings</div>
              <div>
                <table className="w-full table-auto">
                  <tbody className="border-b-1 border-epm-gray-700">
                    <tr className="border-t-1 border-epm-gray-700 h-12">
                      <td className="font-bold transition-all duration-150 hover:text-epm-yellow cursor-pointer">
                        R&D Director
                      </td>
                      <td>Full-Time</td>
                      <td className="text-right">Tel Aviv</td>
                    </tr>
                    <tr className="border-t-1 border-epm-gray-700 h-12">
                      <td className="font-bold transition-all duration-150 hover:text-epm-yellow cursor-pointer">
                        R&D Director
                      </td>
                      <td>Full-Time</td>
                      <td className="text-right">Tel Aviv</td>
                    </tr>
                    <tr className="border-t-1 border-epm-gray-700 h-12">
                      <td className="font-bold transition-all duration-150 hover:text-epm-yellow cursor-pointer">
                        R&D Director
                      </td>
                      <td>Full-Time</td>
                      <td className="text-right">Tel Aviv</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-7/12 lg:flex-grow hidden lg:block ">
          <div className="absolute w-full h-full">
            {isMobile && (
              <Image
                loading="eager"
                src="/img/mobile/homepage/our-story@2x.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            )}
            {isDesktop && (
              <Image
                loading="eager"
                src="/img/desktop/careers/careers@2x.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            )}
          </div>
          <div className="container px-8 py-8 lg:text-2xl font-bold z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-101 text-center">
            <p className="mb-4 lg:mb-8">
              Looking to join a dynamic company and be part of a team where you
              can make a difference? We’d love to learn more about you.
            </p>
            <a href="mailto:jobs@epmip.com">jobs@epmip.com</a>
          </div>
        </div>

        <div className="relative w-full lg:w-7/12 lg:flex-grow hidden">
          <div className="container px-8 lg:px-36 py-8">
            <div className="job-title font-title lg:text-2xl text-epm-yellow">
              R&D Director
            </div>
            <div className="job-details text-lg">
              <span>Tel-Aviv</span>
              <span> | </span>
              <span>Full-time</span>
              <span> | </span>
              <span> Position open to remote: Yes</span>
            </div>
            <div className="job-description text-lg">
              <div className="font-bold mt-4 lg:mt-8">Job Description</div>
              The Ecosystem Engagement team is responsible for the largest
              customer facing web application at EPM. Building features that
              support merchants across the ecosystem and throughout their entire
              lifecycle; as well as acting as role models and setting guidelines
              with impact across the company.
              <div className="font-bold mt-4 lg:mt-8">
                As a Senior Engineer on the Ecosystem Engagement team, you will
                help build products that help merchants gain insights into both
                their business and EPM as a set of tools to help them grow their
                dreams. You will:
              </div>
              <ul>
                <li>
                  Oversee the entirety of your features - that includes
                  component design, implementation, automated testing, and
                  roll-out{" "}
                </li>
                <li>
                  WorkWork with other engineers, designers, and product managers
                  to develop excellent product experiences
                </li>
                <li>
                  Hold yourself, and your teammates accountable to the standards
                  of engineering that enables Square to safely move billions of
                  dollars in payments and allow our customers to trust us with
                  their sensitive data
                </li>
                <li>
                  Work with and influence the larger Frontend community within
                  EPM
                </li>
              </ul>
              <div className="font-bold mt-4 lg:mt-8">You have:</div>
              <ul>
                <li>
                  Natural curiosity and desire to build products that merchants
                  depend on
                </li>
                <li>Desire to solve hard and engaging engineering problems</li>
                <li>A deep understanding of frontend technologies</li>
                <li>Interest and fulfillment in mentoring those around you</li>
                <li>5+ years professional experience</li>
              </ul>
              <div className="font-bold mt-4 lg:mt-8">
                Additional Information
              </div>
              At EPM, we value diversity and always treat all employees and job
              applicants based on merit, qualifications, competence, and talent.
              We do not discriminate on the basis of race, religion, color,
              national origin, gender, sexual orientation, age, marital status,
              veteran status, or disability status.
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CareersComponent;
