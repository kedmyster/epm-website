import Head from "next/head";
import Main from "../components/treatments/main";
import OurTreatments from "../components/treatments/ourTreatments";

export default function Treatments() {
  const getId = (name) => {
    return name.toLowerCase().replace(/ /g, "-");
  };

  const page = {
    treatments: {
      slides: [
        {
          name: "Our Treatments",
          id: getId("Inflammatory Bowel Disease"),
          title: "Inflammatory Bowel Disease",
          formulation: "Oral",
          timeline:
            "Phase 1 clinical trail in healthy volunteers anticipated in 2002",
          solution:
            "The treatment which is based on EPM301, has been evaluated in both acute (DSS induced mouse colitis) and chronic (IL-10 knock-out mouse) animal models of IBD and has shown similar activity to prednisone (acute model) and anti-TNFa mAb (chronic model) when administered by gavage.",
          moreInfo: (
            <div>
              <div className="text base lg:text-lg mb-4 lg:mb-8">
                <p className="mb-4">
                  Crohn’s disease and ulcerative colitis, collectively known as
                  inflammatory bowel disease (IBD), are characterized by chronic
                  inflammation of the gastrointestinal tract.<sup>1</sup> The
                  gastrointestinal tract is responsible for digestion of food,
                  absorption of nutrients, and elimination of waste.
                  Inflammation impairs the ability of affected gastrointestinal
                  organs to function properly, leading to severe symptoms.
                  <sup>2</sup>
                </p>
                <p className="mb-4">
                  IBD is considered as one of the major public health concerns
                  worldwide<sup>3</sup>, and currently these chronic, life-long
                  conditions can be treated but not cured.<sup>3</sup> IBD has
                  been associated with poor quality of life, a high financial
                  burden, extensive morbidity and often results in complications
                  requiring hospitalizations and surgical procedures.
                  <sup>4-6</sup>
                </p>
                <p className="mb-4">
                  Crohn’s disease and ulcerative colitis affect over 2 million
                  individuals in North America, 3.2 million in Europe, and
                  millions more worldwide.<sup>7</sup> As many as 70,000 new
                  cases of IBD are diagnosed in the United States each year.
                  <sup>2</sup>
                </p>
                <p>
                  IBD can be diagnosed at any age although it is more likely to
                  be seen in patients between the ages of 15 and 30. It also
                  affects as many as 80,000 children in the US. Men and women
                  are equally likely to develop IBD.<sup>2</sup>
                </p>
              </div>
              <div className="text-xs mb-4 lg:mb-8">
                References
                <ol className="list-decimal pt-1 pl-3">
                  <li>
                    Hanauer SB. Inflammatory bowel disease: epidemiology,
                    pathogenesis, and therapeutic opportunities. Inflamm Bowel
                    Dis. 2006;12 Suppl 1:S3‐S9.
                    doi:10.1097/01.mib.0000195385.19268.68{" "}
                  </li>
                  <li>
                    THE FACTS ABOUT Inflammatory Bowel Diseases, The Crohn’s &
                    Colitis Foundation of America, 2014{" "}
                  </li>
                  <li>
                    Vemuri R, Gundamaraju R, Eri R. Role of Lactic Acid
                    Probiotic Bacteria in IBD. Curr Pharm Des.
                    2017;23(16):2352‐2355. doi:10.2174/1381612823666170207100025{" "}
                  </li>
                  <li>
                    Cohen RD. The quality of life in patients with Crohn’s
                    disease. Aliment Pharmacol Ther. 2002;16(9):1603‐1609.
                    doi:10.1046/j.1365-2036.2002.01323.x{" "}
                  </li>
                  <li>
                    Bewtra M, Su C, Lewis JD. Trends in hospitalization rates
                    for inflammatory bowel disease in the United States. Clin
                    Gastroenterol Hepatol. 2007;5(5):597‐601.
                    doi:10.1016/j.cgh.2007.01.015{" "}
                  </li>
                  <li>
                    Longobardi T, Jacobs P, Bernstein CN. Work losses related to
                    inflammatory bowel disease in the United States: results
                    from the National Health Interview Survey. Am J
                    Gastroenterol. 2003;98(5):1064‐1072.
                    doi:10.1111/j.1572-0241.2003.07285.x{" "}
                  </li>
                  <li>
                    Ananthakrishnan AN, Kaplan GG, Ng SC. Changing Global
                    Epidemiology of Inflammatory Bowel Diseases: Sustaining
                    Health Care Delivery Into the 21st Century. Clin
                    Gastroenterol Hepatol. 2020;18(6):1252‐1260.
                    doi:10.1016/j.cgh.2020.01.028
                  </li>
                </ol>
              </div>
            </div>
          ),
          images: {
            mobile: {
              url: "/img/mobile/treatments/treatment-pills@3x.png",
              width: 223,
              height: 280,
            },
            desktop: {
              url: "/img/desktop/treatments/treatments-pills@2x.png",
              width: 438,
              height: 508,
            },
          },
          icons: {
            icon1: {
              mobile: {
                url: "/img/icons/treatments/pills-icon.svg",
                width: 27,
                height: 36,
              },
              desktop: {
                url: "/img/icons/treatments/pills-icon.svg",
                width: 45,
                height: 61,
              },
              label: "Oral for IBD",
              subLabel: "(Crohn's & Colitis)",
            },
            icon2: {
              mobile: {
                url: "/img/icons/treatments/clock-icon.svg",
                width: 30,
                height: 30,
              },
              desktop: {
                url: "/img/icons/treatments/clock-icon.svg",
                width: 42,
                height: 42,
              },
              label: <span>Phase I: clinical <br/>trial in 2022</span>,
              subLabel: "",
            },
            icon3: {
              mobile: {
                url: "/img/icons/treatments/32m-ibd.svg",
                width: 30,
                height: 30,
              },
              desktop: {
                url: "/img/icons/treatments/32m-ibd.svg",
                width: 90,
                height: 43,
              },
              label: <span>Patients in<br/>Europe</span>,
            },
          },
        },
        {
          name: "Our Treatments",
          id: getId("Psoriasis"),
          title: "Psoriasis",
          formulation: "Oral",
          timeline:
            "Phase 1 clinical trail in healthy volunteers anticipated in 2002",
          solution:
            "The treatment which is based on EPM301, has been evaluated in both acute (DSS induced mouse colitis) and chronic (IL-10 knock-out mouse) animal models of IBD and has shown similar activity to prednisone (acute model) and anti-TNFa mAb (chronic model) when administered by gavage.",
          images: {
            mobile: {
              url: "/img/mobile/treatments/treatment-tube@3x.png",
              width: 79,
              height: 272,
            },
            desktop: {
              url: "/img/desktop/treatments/treatments-tube@2x.png",
              width: 141,
              height: 482,
            },
          },
          icons: {
            icon1: {
              mobile: {
                url: "/img/icons/treatments/tube-icon.svg",
                width: 30,
                height: 31,
              },
              desktop: {
                url: "/img/icons/treatments/tube-icon.svg",
                width: 49,
                height: 57,
              },
              label: "Topical formulation",
              subLabel: "(Psoriasis)",
            },
            icon2: {
              mobile: {
                url: "/img/icons/treatments/clock-icon.svg",
                width: 30,
                height: 30,
              },
              desktop: {
                url: "/img/icons/treatments/clock-icon.svg",
                width: 42,
                height: 42,
              },
              label: <span>Phase I: clinical<br/>trial in 2022</span>,
              subLabel: "",
            },
            icon3: {
              mobile: {
                url: "/img/icons/treatments/125m-psoriasis.svg",
                width: 30,
                height: 30,
              },
              desktop: {
                url: "/img/icons/treatments/125m-psoriasis.svg",
                width: 102,
                height: 43,
              },
              label: <span>Patients<br/>Worldwide</span>,
            },
          },
        },
        {
          name: "Our Treatments",
          id: getId("Acute Respiratory Distress Syndrome"),
          title: "Acute Respiratory Distress Syndrome",
          formulation: "Oral",
          timeline:
            "Phase 1 clinical trail in healthy volunteers anticipated in 2002",
          solution:
            "The treatment which is based on EPM301, has been evaluated in both acute (DSS induced mouse colitis) and chronic (IL-10 knock-out mouse) animal models of IBD and has shown similar activity to prednisone (acute model) and anti-TNFa mAb (chronic model) when administered by gavage.",
          images: {
            mobile: {
              url: "/img/mobile/treatments/treatment-iv@3x.png",
              width: 192,
              height: 253,
            },
            desktop: {
              url: "/img/desktop/treatments/treatments-iv@2x.png",
              width: 388,
              height: 510,
            },
          },
          icons: {
            icon1: {
              mobile: {
                url: "/img/icons/treatments/iv-icon.svg",
                width: 27,
                height: 35,
              },
              desktop: {
                url: "/img/icons/treatments/iv-icon.svg",
                width: 37,
                height: 37,
              },
              label: "IV Formulation",
              subLabel: "",
            },
            icon2: {
              mobile: {
                url: "/img/icons/treatments/clock-icon.svg",
                width: 30,
                height: 30,
              },
              desktop: {
                url: "/img/icons/treatments/clock-icon.svg",
                width: 42,
                height: 42,
              },
              label: <span>Phase I: clinical <br/>trial in 2021</span>,
              subLabel: "",
            },
            icon3: {
              mobile: {
                url: "/img/icons/treatments/3m-ards.svg",
                width: 30,
                height: 30,
              },
              desktop: {
                url: "/img/icons/treatments/3m-ards.svg",
                width: 58,
                height: 43,
              },
              label: <span>People affected<br/>annually</span>,
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Treatments - EPM</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Main />
      <OurTreatments data={page.treatments} />
    </>
  );
}
