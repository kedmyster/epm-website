import { useEffect } from "react";
import Head from "next/head";
import Main from "../components/treatments/main";
import OurTreatments from "../components/treatments/ourTreatments";

export default function Treatments() {
  useEffect(() => {
    document.querySelector(".menu-item--treatments").classList.add("menu-item--current");
  }, []);

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
          label:"IBD",
          formulation: "Oral",
          timeline:
            "Phase 1 clinical trail in healthy volunteers anticipated in 2002",
          solution:
            "The treatment is based on EPM301 and has been evaluated in both acute (DSS induced mouse colitis) and chronic (IL-10 knock-out mouse) animal models of IBD and has shown similar activity to prednisone (acute model) and anti-TNFa mAb (chronic model) when administered by gavage.",
          moreInfo: (
            <div>
              <div className="text base lg:text-epm-base mb-4 lg:mb-8">
                <p className="mb-4 lg:mb-8">
                  Crohn’s disease and ulcerative colitis, collectively known as
                  inflammatory bowel disease (IBD), are characterized by chronic
                  inflammation of the gastrointestinal tract.<sup>1</sup> The
                  gastrointestinal tract is responsible for digestion of food,
                  absorption of nutrients, and elimination of waste.
                  Inflammation impairs the ability of affected gastrointestinal
                  organs to function properly, leading to severe symptoms.
                  <sup>2</sup>
                </p>
                <p className="mb-4 lg:mb-8">
                  IBD is considered as one of the major public health concerns
                  worldwide<sup>3</sup>, and currently these chronic, life-long
                  conditions can be treated but not cured.<sup>3</sup> IBD has
                  been associated with poor quality of life, a high financial
                  burden, extensive morbidity and often results in complications
                  requiring hospitalizations and surgical procedures.
                  <sup>4-6</sup>
                </p>
                <p className="mb-4 lg:mb-8">
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
              <div className="text-xs">
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
              label: "Oral Formulation",
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
              label: (
                <span>
                  Phase I: clinical <br />
                  trial in 2022
                </span>
              ),
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
              label: (
                <span>
                  Patients in
                  <br />
                  Europe
                </span>
              ),
            },
          },
        },
        {
          name: "Our Treatments",
          id: getId("Psoriasis"),
          title: "Psoriasis",
          label:"Psoriasis",
          formulation: "Topical",
          timeline:
            "Phase 1 clinical trail in healthy volunteers anticipated in 2002",
          solution:
            "The treatment is based on EPM301 and has been evaluated in an ex vivo model of inflammatory skin disease. When applied topically, it displayed similar activity to hydrocortisone",
          moreInfo: (
            <div>
              <div className="text base lg:text-epm-base mb-4 lg:mb-8">
                <p className="mb-4 lg:mb-8">
                  Psoriasis is a chronic, systemic, inflammatory skin disease
                  associated with a significant physical and psychological
                  burden. The disease manifests in the skin or joints or both.
                  <sup>1</sup>
                </p>
                <p className="mb-4 lg:mb-8">
                  Psoriasis affects up to 7.5 million people in the US.
                  <sup>2</sup>
                  Worldwide, 125 million people, 2–3% of the total population,
                  have psoriasis.<sup>2</sup> Plaque psoriasis, also called
                  psoriasis vulgaris, is the most common form and affects about
                  80–90% of people with psoriasis.<sup>1,3,4</sup>
                </p>
                <p className="mb-4 lg:mb-8">
                  The typical age of onset is 15–25 years, but psoriasis can
                  develop at any age.<sup>2</sup> People with psoriasis are at
                  an increased risk of developing other chronic and serious
                  health conditions. Comorbidities include psoriatic arthritis,
                  inflammatory bowel disease, hypertension, diabetes, obesity,
                  and depression.<sup>3</sup> Psoriasis has a significant impact
                  on life quality and mental health.<sup>1,3</sup> Nearly 60% of
                  psoriasis patients consider the disease to be a large problem
                  in their everyday lives.<sup>5</sup>
                </p>
              </div>
              <div className="text-xs">
                References
                <ol className="list-decimal pt-1 pl-3">
                  <li>
                    Boehncke WH, Schon MP. Psoriasis. Lancet.
                    2015;386(9997):983–994.
                  </li>
                  <li>
                    National Psoriasis Foundation. Statistics.
                    https://www.psoriasis.org/content/statistics{" "}
                  </li>
                  <li>
                    Menter A, Gottlieb A, Feldman SR, et al. Guidelines of care
                    for the management of psoriasis and psoriatic arthritis:
                    Section 1. Overview of psoriasis and guidelines of care for
                    the treatment of psoriasis with biologics. Journal of the
                    American Academy of Dermatology. 2008;58(5):826–850.{" "}
                  </li>
                  <li>
                    Mease PJ, Gladman DD, Papp KA, et al. Prevalence of
                    rheumatologist-diagnosed psoriatic arthritis in patients
                    with psoriasis in European/North American dermatology
                    clinics. Journal of the American Academy of Dermatology.
                    2013;69(5):729–735.{" "}
                  </li>
                  <li>
                    Keating GM. Apremilast: A Review in psoriasis and psoriatic
                    arthritis. Drugs. 2017;77(4):459–472.{" "}
                  </li>
                </ol>
              </div>
            </div>
          ),
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
              label: (
                <span>
                  Phase I: clinical
                  <br />
                  trial in 2022
                </span>
              ),
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
              label: (
                <span>
                  Patients
                  <br />
                  Worldwide
                </span>
              ),
            },
          },
        },
        {
          name: "Our Treatments",
          id: getId("Acute Respiratory Distress Syndrome"),
          title: "Acute Respiratory Distress Syndrome",
          label:"ARDS",
          formulation: "IV",
          timeline:
            "IND approval to treat COVID-19 patients with poor prognosis under compassionate usage grounds is anticipated in Q4 2021",
          solution:
            "The treatment is based on EPM301 and has demonstrated anti-inflammatory activity in a number of models of inflammatory disease (acute and chronic colitis, inflammatory skin diseases) when administered both orally and topically. EPM301 was also well tolerated in a 7-day IV toxicity study in rats.",
          moreInfo: (
            <div>
              <div className="text base lg:text-epm-base mb-4 lg:mb-8">
                <p className="mb-4 lg:mb-8">
                  Coronavirus disease 2019 (COVID-19) is a disease caused by a
                  new virus – severe acute respiratory syndrome coronavirus 2
                  (SARS-CoV-2).<sup>1</sup>
                </p>
                <p className="">
                  The mainstay of management of patients with COVID‐19 is
                  supportive therapy, including fluid management, oxygen
                  therapy, and mechanical ventilation.<sup>5</sup> Cytokine
                  storm and inflammation induced by the uncontrolled immunologic
                  response to the virus underlies the fatal pneumonia that can
                  follow infection with human coronaviruses.<sup>6,7</sup> The
                  inhibition of this inflammation has been demonstrated to
                  improve outcome in animals infected with SARS and MERS
                  viruses.<sup>8,9</sup>
                  Corticosteroids are also typically used to treat severe acute
                  respiratory infections of viral aetiology because of their
                  anti‐inflammatory effect.<sup>10</sup>
                </p>
              </div>
              <div className="text-xs">
                References
                <ol className="list-decimal pt-1 pl-3">
                  <li>
                    Zhou P, Yang XL, Wang XG, et al. A pneumonia outbreak
                    associated with a new coronavirus of probable bat origin.
                    Nature 2020; 579: 270–273{""}
                  </li>
                  <li>
                    Yang X, Yu Y, Xu J, et al. Clinical course and outcomes of
                    critically ill patients with SARS‐CoV‐2 pneumonia in Wuhan,
                    China: a single‐centered, retrospective, observational
                    study. Lancet Respir Med 2020;
                    https://doi.org/10.1016/s2213-2600(20)30079-5[Epub ahead of
                    print].{""}
                  </li>
                  <li>
                    Wang D, Hu B, Hu C, et al. Clinical characteristics of 138
                    hospitalized patients with 2019 novel coronavirus‐infected
                    pneumonia in Wuhan, China. JAMA 2020; 323: 1061–1069.{" "}
                  </li>
                  <li>
                    Chen N, Zhou M, Dong X, et al. Epidemiological and clinical
                    characteristics of 99 cases of 2019 novel coronavirus
                    pneumonia in Wuhan, China: a descriptive study. Lancet 2020;
                    395: 507–513.{" "}
                  </li>
                  <li>
                    Jin YH, Cai L, Cheng ZS, et al. A rapid advice guideline for
                    the diagnosis and treatment of 2019 novel coronavirus
                    (2019‐nCoV) infected pneumonia (standard version). Mil Med
                    Res 2020; 7:{""}
                  </li>
                  <li>
                    Channappanavar R, Perlman S. Pathogenic human coronavirus
                    infections: causes and consequences of cytokine storm and
                    immunopathology. Semin Immunopathol 2017; 39: 529–539.{""}
                  </li>
                  <li>
                    Zhou J, Chu H, Li C, et al. Active MERS‐CoV replication and
                    aberrant induction of inflammatory cytokines and chemokines
                    in human macrophages: implications for pathogenesis. J
                    Infect Dis 2014; 209: 1331–1342.{""}
                  </li>
                  <li>
                    Chan JF, Yao Y, Yeung ML, et al. Treatment with
                    lopinavir/ritonavir or interferon‐β1b improves outcome of
                    MERS‐CoV infection in a nonhuman primate model of common
                    marmoset. J Infect Dis 2015; 212: 1904–1913.{""}
                  </li>
                  <li>
                    DeDiego ML, Nieto‐Torres JL, Regla‐Nava JA, et al.
                    Inhibition of NF‐κB‐mediated inflammation in severe acute
                    respiratory syndrome coronavirus‐infected mice increases
                    survival. J Virol 2014; 88: 913–924.{""}
                  </li>
                  <li>
                    Sibila O, Agusti C, Torres A. Corticosteroids in severe
                    pneumonia. Eur Respir J 2008; 32: 259–264.{""}
                  </li>
                </ol>
              </div>
            </div>
          ),
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
              label: (
                <span>
                  Phase I: clinical <br />
                  trial in 2021
                </span>
              ),
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
              label: (
                <span>
                  People affected
                  <br />
                  annually
                </span>
              ),
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
        <link rel="preload" as="image" href="/img/desktop/treatments/hero@2x.jpg" />
        <link rel="preload" as="image" href="/img/mobile/treatments/hero@2x.jpg" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>

      <Main />
      <OurTreatments data={page.treatments} />
    </>
  );
}
