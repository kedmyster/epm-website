import Image from "next/image";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormattedMessage } from "react-intl";
import classNames from "classnames";
import Link from "next/link";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

function Footer({}) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();
  const intl = useIntl();

  useEffect(() => {
    if (windowWidth >= 1280) {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    } else if (windowWidth >= 1024) {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
    }
  }, [windowWidth]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const tl = gsap.timeline();

    tl.add("contact-form-submit");
    tl.fromTo(
      ".contact__form",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.25,
      },
      "contact-form-submit"
    );
    tl.fromTo(
      ".contact__thanks",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.25,
        zIndex: 11,
      },
      "contact-form-submit"
    );
  };

  const scrollToHome = (event) => {
    event.preventDefault();
    document.querySelector("#main").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="section bg-epm-yellow min-h-screen lg:flex lg:flex-wrap lg:content-center"
      data-side-menu-visibility="hidden"
      data-logo-color="dark"
    >
      <div className="animate opacity-0 container mx-auto min-h-screen lg:min-h-0 lg:h-103 px-8 lg:px-16 xl:px-24 2xl:px-8 pt-12 pb-4 lg:py-8 lg:ps-24 xl:ps-56 2xl:ps-8 lg:flex lg:flex-col lg:justify-between">
        <div className="lg:flex lg:flex-row lg:justify-between relative">
          <div className="contact__form flex-grow lg:flex-grow-0 relative z-10 lg:w-96 2xl:w-109 xl:pe-0">
            <div className="mb-4 lg:mb-8">
              <h2 className="font-title text-4.5xl lg:text-6xl xl:text-5.5xl 2xl:text-7.5xl leading-snug lg:leading-normal xl:leading-snug text-epm-gray-700">
                <FormattedMessage
                  id="footer.title"
                  defaultMessage="Make a Change with Us"
                />
              </h2>
              <p className="mt-4">
                <FormattedMessage
                  id="footer.description"
                  defaultMessage="For more updates about EPM please fill in your details:"
                />
              </p>
            </div>
            <div className="mb-8 lg:mb-0">
              <Formik
                initialValues={{ firstName: "", lastName: "", email: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  dataLayer.push({
                    event: "epm",
                    eventdata: {
                      category: "lead",
                      action: "form_submit",
                    },
                  });

                  setTimeout(async () => {
                    setSubmitting(false);

                    fetch(
                      "https://hooks.zapier.com/hooks/catch/5896166/b90eib7/",
                      {
                        method: "POST",
                        mode: "no-cors",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          firstName: values.firstName,
                          lastName: values.lastName,
                          email: values.email,
                          phone: values.phone,
                          locale: router.locale,
                        }),
                      }
                    )
                      .then((response) => {
                        const tl = gsap.timeline();

                        tl.add("contact-form-submit");
                        tl.fromTo(
                          ".contact__form",
                          {
                            opacity: 1,
                          },
                          {
                            opacity: 0,
                            duration: 0.25,
                          },
                          "contact-form-submit"
                        );
                        tl.fromTo(
                          ".contact__thanks",
                          {
                            opacity: 0,
                          },
                          {
                            opacity: 1,
                            duration: 0.25,
                            zIndex: 11,
                          },
                          "contact-form-submit"
                        );
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                  }, 400);
                }}
              >
                {({ errors, isSubmitting }) => (
                  <Form>
                    <div className="flex flex-col">
                      <div className="mb-4 lg:mb-6 leading-8 lg:flex">
                        <Field
                          type="text"
                          name="firstName"
                          placeholder={intl.formatMessage({
                            id: "contact.firstName",
                            defaultMessage: "First Name*",
                          })}
                          className="w-full font-light rounded-3xl px-5 py-2 me-4 mb-4 lg:mb-0"
                        />
                        <Field
                          type="text"
                          name="lastName"
                          placeholder={intl.formatMessage({
                            id: "contact.lastName",
                            defaultMessage: "Last Name*",
                          })}
                          className="w-full font-light rounded-3xl px-5 py-2"
                        />
                      </div>
                      <div className="mb-4 lg:mb-6 leading-8 flex-1">
                        <Field
                          type="email"
                          name="email"
                          placeholder={intl.formatMessage({
                            id: "contact.email",
                            defaultMessage: "Email Address*",
                          })}
                          className={classNames(
                            "w-full font-light rounded-3xl px-5 py-2",
                            {
                              "outline-2 outline-red-500": errors.email,
                            }
                          )}
                        />
                      </div>
                      <div className="mb-4 lg:mb-6 leading-8 flex-1">
                        <Field
                          type="tel"
                          name="phone"
                          placeholder={intl.formatMessage({
                            id: "contact.phone",
                            defaultMessage: "Phone Number",
                          })}
                          className={classNames(
                            "w-full font-light rounded-3xl px-5 py-2",
                            {
                              "outline-2 outline-red-500": errors.phone,
                            }
                          )}
                        />
                      </div>
                      <div className="mb-12 lg:mb-20">
                        <button
                          type="submit"
                          className="w-full lg:w-auto font-title text-center uppercase transition-opacity duration-150 hover:opacity-70 bg-epm-gray-700 text-xl border-3 border-epm-gray-700 text-white font-light rounded-3xl lg:px-16 py-1"
                          disabled={isSubmitting}
                        >
                          <FormattedMessage
                            id="contact.submit"
                            defaultMessage="Submit"
                          />
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="contact__thanks mb-12 opacity-0 absolute top-0 start-0 z-0">
            <div className="mb-8">
              <h2 className="font-title text-4.5xl lg:text-6xl xl:text-4.5xl 2xl:text-6xl leading-snug lg:leading-normal xl:leading-snug text-white">
                <FormattedMessage
                  id="footer.contact.success.great"
                  defaultMessage="Great :)"
                />
              </h2>
              <p className="text-xs lg:text-lg font-title text-white mt-4">
                <FormattedMessage
                  id="footer.contact.success.thanks"
                  defaultMessage="Thank You!"
                />
              </p>
              <p className="text-xs lg:text-lg font-title text-white">
                <FormattedMessage
                  id="footer.contact.success.thanks2"
                  defaultMessage=""
                />
              </p>
            </div>
            <div>
              {/* <a
                href="#main"
                onClick={(event) => scrollToHome(event)}
                className="font-title text-md text-epm-gray-700 underline uppercase"
              >
                Back home
              </a> */}
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-grow">
              <div className="mb-4 leading-8">
                <div className="text-white font-bold uppercase">
                  <FormattedMessage
                    id="footer.information.title"
                    defaultMessage="Information"
                  />
                </div>
                <div className="">
                  <a
                    href="mailto:info@epmip.com"
                    className="underline transition-opacity duration-150 hover:opacity-70"
                  >
                    info@epmip.com
                  </a>
                </div>
                <div className="">
                  <FormattedMessage
                    id="footer.information.ir"
                    defaultMessage="Investor Relations"
                  />
                  :{" "}
                  <a
                    href="mailto:ir@epmip.com"
                    className="underline transition-opacity duration-150 hover:opacity-70"
                  >
                    ir@epmip.com
                  </a>
                </div>
                <div className="">
                  <FormattedMessage
                    id="footer.information.media"
                    defaultMessage="Media"
                  />
                  :{" "}
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
                  <div className="text-white font-bold uppercase">
                    <FormattedMessage
                      id="footer.il.title"
                      defaultMessage="Israel Headquarters"
                    />
                  </div>
                  <div className="">
                    <FormattedMessage
                      id="footer.il.address1"
                      defaultMessage="5 Kinneret St."
                    />
                    <br />
                    <FormattedMessage
                      id="footer.il.address2"
                      defaultMessage="14th floor"
                    />
                    <br />
                    <FormattedMessage
                      id="footer.il.address3"
                      defaultMessage="BSR 3 Tower"
                    />
                    <br />
                    <FormattedMessage
                      id="footer.il.address4"
                      defaultMessage="B.B.C. Business Center"
                    />
                    <br />
                    <FormattedMessage
                      id="footer.il.address5"
                      defaultMessage="Bnei Brak 5126237 "
                    />
                    <br />
                    {isMobile && (
                      <a href="tel:+972 077 307 5060 500">
                        <FormattedMessage
                          id="footer.il.tel"
                          defaultMessage="Tel: (+972) 077-5060-500"
                        />
                      </a>
                    )}
                    {!isMobile && (
                      <FormattedMessage
                        id="footer.il.tel"
                        defaultMessage="Tel: (+972) 077-5060-500"
                      />
                    )}
                  </div>
                </div>
                <div className="mb-4 leading-8">
                  <div className="text-white font-bold uppercase">
                    <FormattedMessage
                      id="footer.us.title"
                      defaultMessage="US Office"
                    />
                  </div>
                  <div className="">
                    <FormattedMessage
                      id="footer.us.address1"
                      defaultMessage="1347 19th St."
                    />
                    <br />
                    <FormattedMessage
                      id="footer.us.address2"
                      defaultMessage="Los Angeles, Santa Monica, 90404"
                    />
                    <br />
                    {isMobile && (
                      <a href="tel:+1 323 307 2111">
                        <FormattedMessage
                          id="footer.us.tel"
                          defaultMessage="Tel: +1 (323) 307-2111"
                        />
                      </a>
                    )}
                    {!isMobile && (
                      <span>
                        <FormattedMessage
                          id="footer.us.tel"
                          defaultMessage="Tel: +1 (323) 307-2111"
                        />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:hidden">
              <div className="mb-3">
                <a
                  href="https://www.linkedin.com/company/epmip/"
                  target="_blank"
                  rel="noopener"
                  className="transition-opacity duration-150 hover:opacity-70"
                >
                  <Image
                    src="/img/icons/linkedin-dark-gray.svg"
                    width="32"
                    height="32"
                    alt="LinkedIn"
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
                    src="/img/icons/twitter-dark-gray.svg"
                    width="32"
                    height="32"
                    alt="Twitter"
                  />
                </a>
              </div>
              <div className="mb-3">
                <a
                  href="https://www.youtube.com/channel/UCr8mb7WyEcxGCEXIyYS0Cog"
                  target="_blank"
                  rel="noopener"
                  className="transition-opacity duration-150 hover:opacity-70"
                >
                  <Image
                    src="/img/icons/youtube-dark-gray.svg"
                    width="32"
                    height="32"
                    alt="YouTube"
                  />
                </a>
              </div>
            </div>
          </div>
          <div id="footer_menu" className="footer-menu hidden lg:block">
            <div div className="container mx-auto px-8 lg:px-0 relative">
              <nav role="navigation">
                <ul className="leading-8">
                  <li className="font-title text-epm-gray-700 tracking-wide pb-4">
                    <a
                      href={router.locale === "en" ? "/about" : "/he/about"}
                      className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                    >
                      <FormattedMessage
                        id="footer.menu.about"
                        defaultMessage="About"
                      />
                    </a>
                  </li>
                  <li className="font-title text-epm-gray-700 tracking-wide pb-4">
                    <a
                      href={router.locale === "en" ? "/science" : "/he/science"}
                      className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                    >
                      <FormattedMessage
                        id="footer.menu.science"
                        defaultMessage="Science"
                      />
                    </a>
                  </li>
                  <li className="font-title text-epm-gray-700 tracking-wide pb-4">
                    <a
                      href={
                        router.locale === "en"
                          ? "/treatments"
                          : "/he/treatments"
                      }
                      className="block uppercase underline"
                    >
                      <FormattedMessage
                        id="footer.menu.treatments"
                        defaultMessage="Treatments"
                      />
                    </a>
                  </li>
                  <li className="font-title text-epm-gray-700 tracking-wide pb-4">
                    <a
                      href={router.locale === "en" ? "/media" : "/he/media"}
                      className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                    >
                      <FormattedMessage
                        id="footer.menu.media"
                        defaultMessage="Media"
                      />
                    </a>
                  </li>
                  <li className="font-title text-epm-gray-700 tracking-wide pb-4">
                    <a
                      href={router.locale === "en" ? "/careers" : "/he/careers"}
                      className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                    >
                      <FormattedMessage
                        id="footer.menu.careers"
                        defaultMessage="Careers"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="copyright text-xs lg:text-sm font-title text-epm-gray-700">
          <a
            href={
              router.locale === "en" ? "/privacy-policy" : "/he/privacy-policy"
            }
            className="underline cursor-pointer transition-opacity duration-150 hover:opacity-70"
          >
            <FormattedMessage
              id="footer.menu.privacyPolicy"
              defaultMessage="Privacy Policy"
            />
          </a>
          <span> | </span>
          <a
            href={router.locale === "en" ? "/terms-of-use" : "/he/terms-of-use"}
            className="underline cursor-pointer transition-opacity duration-150 hover:opacity-70"
          >
            <FormattedMessage
              id="footer.menu.termsOfUse"
              defaultMessage="Terms of Use"
            />
          </a>
          <span className="hidden lg:inline"> | </span>
          <span className="block mt-1.5 lg:inline-block lg:mt-0">
            <FormattedMessage
              id="footer.copyright"
              defaultMessage="Copyright ©2021 EPM Group, Inc. All Rights Reserved"
            />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
