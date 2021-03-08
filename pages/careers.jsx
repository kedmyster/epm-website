import { useState, useEffect } from "react";
import Head from "next/head";
import CareersComponent from "../components/careers/careers";

export default function Careers() {
  useEffect(() => {
    document.body.dataset.headerTheme = "dark";
    document
      .querySelector(".menu-item--careers")
      .classList.add("menu-item--current");
  }, []);

  const [positions, setPositions] = useState([{}]);
  const page = {
    careers: {
      items: [
        {
          position: "R&D Director",
          location: "Santa Monica, USA",
          description: (
            <div>
              <strong className="block ">About the role:</strong>
              <p className="mb-4 lg:mb-8">
                Reporting to the CEO, this is an exciting opportunity to be one
                of the key members in the Senior Management Team. The R&D
                director will be responsible for all stages of drug development,
                including Proof of Concept (POC), pre-clinical and IND-enabling
                studies and early stage clinical studies.
              </p>
              <p className="mb-4 lg:mb-8">
                She/he will be highly motivated, with superior communication,
                excellent organizational skills and to be able to work both
                independently and in a team environment. This is a “roll up your
                sleeves”, hands-on position.
              </p>
              <strong className="block">Responsibilities and Tasks:</strong>
              <ul className="list-disc ml-5 mb-4 lg:mb-8">
                <li>
                  Oversee the preparation and management of the R&D project
                  plans, budgets, and long-term planning.
                </li>
                <li>Strong influencer on the company-wide-strategy.</li>
                <li>
                  Identify potential research projects to expand the Company’s
                  product pipeline.
                </li>
                <li>
                  Participate in regulatory strategy development, providing
                  scientific input and support for the compilation of regulatory
                  submissions required for clinical trial applications.
                </li>
                <li>
                  Support the management of the Company’s intellectual property
                  IP portfolio and additional applications.
                </li>
                <li>
                  Provide guidance, mentoring, and staff development and
                  recruitment; ensure the R&D team has appropriate skills,
                  capabilities, and resources to meet current and future
                  business needs. Build the function to support ongoing
                  organizational needs.
                </li>
                <li>
                  Ensure all research and development activities related to
                  product development are completed in accordance with quality
                  and regulatory expectations to support quality and relevant
                  global regulatory submissions.
                </li>
                <li>
                  Negotiate and review technical/quality agreements to ensure
                  that outsourced activities are conducted in compliance with
                  quality requirements.
                </li>
                <li>
                  Support R&D team members in the management of Contract
                  Research Organizations (CMOs), contractors, consultants,
                  suppliers, and all outsourced contract research activities.
                  Ensure the selection of appropriate collaborators and oversee
                  their subsequent technical management to ensure competence and
                  data integrity through all stages of development.
                </li>
                <li>
                  Present R&D information and research plans/updates to the
                  Executive Leadership Team, the Board of Directors, and
                  businesspartners, as required.
                </li>
              </ul>
              <strong className="block">Education</strong>
              <ul className="list-disc ml-5 mb-4 lg:mb-8">
                <li>
                  PhD in Life Sciences, preferably biology, pharmaceutical
                  sciences, or a related scientific discipline.
                </li>
              </ul>
              <strong className="block">Requirements and Skills:</strong>
              <ul className="list-disc ml-5 mb-4 lg:mb-8">
                <li>
                  A minimum of 5 -7 years of R&D and/or project management
                  experience in the pharmaceutical industry. With a strong track
                  record of success in developing and managing R&D strategic,
                  operating plans and budgets, as well as building and
                  recruiting a team.
                </li>
                <li>
                  Leadership and managerial experience, leading cross-functional
                  projects, planning and delivering results within project
                  deadlines. Participation in portfolio decision- making in a
                  smaller biotech organization is preferred.
                </li>
                <li>
                  Demonstrated ability to identify and assess research projects.
                </li>
                <li>
                  Demonstrated ability to build effective relationships across
                  global internal and external participants, preferably with
                  experience in a matrix environment.
                </li>
                <li>
                  An outstanding problem solver who is solution-oriented and has
                  a genuine interest in helping.
                </li>
                <li>
                  Demonstrated strong communication skills – a true team player.
                </li>
              </ul>
              <strong className="block">Preferred:</strong>
              <ul className="list-disc ml-5 mb-4 lg:mb-8">
                <li>
                  Knowledge of Cannabinoids research will be an advantage.
                </li>
              </ul>
              <span className="mb-4 lg:mb-8 block">
                To apply today, submit your resume to jobs@epmip.com. Join us!
              </span>
            </div>
          ),
        },
        {
          position: "R&D Manager",
          location: "Tel Aviv, Israel",
          description: (
            <div>
              <strong className="block mb-4 lg:mb-8">About the role:</strong>
              <p className="mb-4 lg:mb-8">
                This is an exciting opportunity to join an innovative core team
                in a growing company, that believes in making a difference and
                committed to novel discovery of cannabinoid acid molecules for
                research and drug development purposes. The R&D manager will be
                responsible for supporting and managing drug development
                projects carried out to meet EPM’s business objectives.
              </p>
              <p className="mb-4 lg:mb-8">
                She/he will be highly motivated, with superior communication,
                excellent organizational skills and to be able to work both
                independently and in a team environment.
              </p>
              <strong className="block mb-4 lg:mb-8">
                Responsibilities and Tasks:
              </strong>
              <ul className="list-disc ml-5 mb-4 lg:mb-8">
                <li>
                  Ensure all research and development activities related to
                  product development are completed in accordance with quality
                  and regulatory expectations to support quality and relevant
                  global regulatory submissions.
                </li>
                <li>
                  Facilitate in different scientific discussions with strategic
                  partners.
                </li>
                <li>
                  Negotiate and review technical/quality agreements to ensure
                  that outsourced activities are conducted in compliance with
                  quality requirements.
                </li>
                <li>
                  Supports technical interactions with external contract
                  research organisations to partner with EPM on R&D activities.
                </li>
                <li>
                  Create new procedures and documentation to facilitate
                  effective work.
                </li>
                <li>
                  Identify potential research projects to expand the Company’s
                  product pipeline.
                </li>
              </ul>
              <strong className="block mb-4 lg:mb-8">Education:</strong>
              <ul className="mb-4 lg:mb-8 list-disc ml-5">
                <li>
                  PhD in Life Sciences, preferably biology, pharmaceutical
                  sciences, or a related scientific discipline.
                </li>
              </ul>
              <strong className="block mb-4 lg:mb-8">
                Requirements and Skills:
              </strong>
              <ul className="mb-4 lg:mb-8 list-disc ml-5">
                <li>
                  A minimum of 4 years of R&D and/or project management
                  experience in the pharmaceutical industry.
                </li>
                <li>Experience with synthetic and/or botanical products.</li>
                <li>
                  Experience in at least one area of drug development, with
                  awareness of quality and regulatory expectations in
                  pharmaceutical development.
                </li>
                <li>
                  A scientific approach to data with a high level of statistics
                  with excellent attention to detail.
                </li>
                <li>
                  Can lead both internal and external meetings effectively.
                </li>
                <li>
                  Strong IT skills and ability to use all key packages (Word,
                  Powerpoint and Excel) to produce, present and analyse data and
                  produce compelling materials for internal and external use.
                </li>
                <li>
                  An outstanding problem solver who is solution-oriented and has
                  a genuine interest in helping.
                </li>
                <li>
                  Good communications skills with an ability to adapt style and
                  content to address the particular needs of the situation or
                  audience.
                </li>
                <li>A true team player.</li>
                <li>
                  Professional-level English in both speaking and writing.
                </li>
              </ul>
              <strong className="block mb-4 lg:mb-8">Preferred:</strong>
              <ul className="list-disc ml-5 mb-4 lg:mb-8">
                <li>
                  Knowledge of Cannabinoids research will be an advantage.
                </li>
                <li>Experience contributing to regulatory submissions.</li>
              </ul>
              <span className="mb-4 lg:mb-8 block">
                To apply today, submit your resume to jobs@epmip.com. Join us!
              </span>
            </div>
          ),
        },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Careers - EPM</title>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preload"
          as="image"
          href="/img/desktop/careers/careers@2x.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="/img/mobile/careers/careers@2x.jpg"
        />
        <meta
          name="description"
          content="We are a fast-paced and dynamic company, striving to develop new medicine and create safer treatments for patients. We believe in helping people live a higher quality of life."
        />
        <meta
          name="keywords"
          content="obs@epmip.com, Shape the Future of Healthcare"
        />
      </Head>

      <CareersComponent data={page.careers} positions={positions} />
    </>
  );
}
