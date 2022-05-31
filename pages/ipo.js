import Head from "next/head";
import StandardTemplate from "../components/layout/templates/StandardTemplate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classNames from "classnames";
import { gsap } from "gsap";

function IPO() {
  return (
    <>
      <Head>
        <title>הנפקה נגישה לציבור - EPM</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <StandardTemplate title={"הנפקה נגישה לציבור"}>
        <div className="">
          <div className="mb-10 text-lg">
            <div className="external-text">
              <p>
                החברה מתכבדת להודיע כי ביום 31 במאי 2022, החליט דירקטוריון החברה
                על ביטול ההנפקה, בין היתר לאור המצב בתקופה הנוכחית בשוק ההון,
                ועל רקע קבלת הצעה עסקית פרטית שתאפשר לחברה את המשך פיתוחיה.
              </p>

              <p>
                <strong>
                  יובהר כי בהתאם לסעיף 2.4.3יב לתשקיף החברה, הזמנות לרכישת
                  ניירות ערך שהוגשו על ידי משקיעים תהיינה בטלות, ויושבו למשקיעים
                  הכספים שהעבירו לחשבון ההנפקה, בערך הנומינאלי ללא ריבית והצמדה,
                  בתוך 14 ימים, באותו הערוץ שבו שולמו.
                </strong>
              </p>

              <p>
                כמו כן יובהר כי ניירות הערך שהוצעו על ידי החברה לא יוקצו ולא
                יירשמו למסחר בבורסה.
              </p>

              <p>החברה מודה לציבור על ההיענות ושיתוף הפעולה.</p>

              <p>
                <strong>__________</strong>
              </p>
            </div>
          </div>

          <div className="mb-10 text-lg">
            <div className="external-text">
              <p>
                זאב רוטשטיין, נשיא החברה וראש הועדה המייעצת: ״בהנפקה הנגישה
                הדגשנו כי ברצוננו להשיא ערך למשקיעי החברה, אך המצב בשוק ההון
                כיום מייצר מצב של ירידת ערך משמעותית באופן כמעט וודאי למשקיעים
                בטווח המיידי. מי שמכיר אותי יודע שאיני יכול לתת למצב כזה לקרות
                ולכן המלצתי לדירקטוריון החברה בשעה זאת לקבל את ההצעה לגיוס פרטי
                מבלי לפגוע בהליך הפיתוח.״
              </p>

              <p>
                רשף סויסה, בעלים ומנכ"ל החברה: "חוכמת ההמונים מוכיחה כי הנפקה
                נגישה בישראל בשיתוף כלל הציבור היא אפשרות שהציבור מחפש. לראיה,
                בתקופה של 14 יום איפיאם קיבלה הזמנות מהציבור הרחב לרכישת ניירות
                ערך בהיקף של 26 מיליון ₪. יחד עם זאת, על רקע המתרחש בשוק ההון,
                ולאור קבלת הצעה עסקית אטרקטיבית - אשר מאפשרת את המשך פיתוחי
                החברה, החליט הדירקטוריון לבטל בשלב זה את ההנפקה ולהשאיר את החברה
                פרטית. משקיעים כשירים מוזמנים לפנות לחברה ולבחון אפשרויות השקעה.
                החברה תעדכן בהתפתחויות ככל שיהיו.״
              </p>

              <p>
                סויסה הוסיף, אבקש לנצל במה זאת, על מנת להודות לכל הגופים הנהדרים
                אשר שיתפו איתנו פעולה בתהליך ועזרו לנו להרים את הפרויקט הייחודי
                הזה. ברצוני לחזק חברות אחרות שמאמינות במוצר ובהצלחתו. למרות הדרך
                המאתגרת שבהנפקה בשיתוף הציבור, הוכחנו שהדבר אפשרי במדינת ישראל
                ואני מקווה שסייענו לפתוח את הדלת לאחרים שיבואו בעקבותינו״
              </p>

              <p>
                <strong>__________</strong>
              </p>
            </div>
          </div>

          <div className="mb-10 text-lg">
            <div className="external-text">
              <p>
                אנו זמינים לכל שאלה או פנייה. אנא מלאו את הטופס הבא ונחזור אליכם
                בהקדם:
              </p>
            </div>

            <div className="relative">
              <div className="ipo-contact-form mt-10 max-w-sm">
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.firstName) {
                      errors.firstName = "חובה";
                    }

                    if (!values.lastName) {
                      errors.lastName = "חובה";
                    }

                    if (!values.email) {
                      errors.email = "חובה";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "כתובת אימייל לא תקינה";
                    }

                    if (!values.phone) {
                      errors.phone = "חובה";
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
                        "https://hooks.zapier.com/hooks/catch/5896166/bfnit9p/",
                        {
                          method: "POST",
                          mode: "no-cors",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            email: values.email,
                            phone: values.phone,
                          }),
                        }
                      )
                        .then((response) => {
                          const tl = gsap.timeline();

                          tl.add("ipo-contact-form-submit");
                          tl.fromTo(
                            ".ipo-contact-form",
                            {
                              opacity: 1,
                            },
                            {
                              opacity: 0,
                              duration: 0.25,
                            },
                            "ipo-contact-form-submit"
                          );
                          tl.fromTo(
                            ".ipo-contact-form__thanks",
                            {
                              opacity: 0,
                            },
                            {
                              opacity: 1,
                              duration: 0.25,
                              zIndex: 11,
                            },
                            "ipo-contact-form-submit"
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
                        <div className="mb-4 lg:mb-6 leading-8 lg:flex lg:gap-4">
                          <Field
                            type="text"
                            name="firstName"
                            placeholder="שם פרטי*"
                            className={classNames(
                              "border-2 border-gray-800 w-full font-light rounded-3xl px-5 py-2",
                              {
                                "border-red-500": errors.email,
                              }
                            )}
                          />
                        </div>
                        <div className="mb-4 lg:mb-6 leading-8 lg:flex lg:gap-4">
                          <Field
                            type="text"
                            name="lastName"
                            placeholder="שם משפחה*"
                            className={classNames(
                              "border-2 border-gray-800  w-full font-light rounded-3xl px-5 py-2",
                              {
                                "border-red-500": errors.email,
                              }
                            )}
                          />
                        </div>
                        <div className="mb-4 lg:mb-6 leading-8 lg:flex lg:gap-4">
                          <Field
                            type="email"
                            name="email"
                            placeholder="אימייל*"
                            className={classNames(
                              "border-2 border-gray-800  w-full font-light rounded-3xl px-5 py-2",
                              {
                                "border-red-500": errors.email,
                              }
                            )}
                          />
                        </div>
                        <div className="mb-4 lg:mb-6 leading-8 lg:flex lg:gap-4">
                          <Field
                            type="tel"
                            name="phone"
                            placeholder="טלפון*"
                            className={classNames(
                              "border-2 border-gray-800  w-full font-light rounded-3xl px-5 py-2",
                              {
                                "border-red-500": errors.phone,
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
                            שלח פנייה
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>

              <div className="ipo-contact-form__thanks opacity-0 absolute top-0">
                <span className="text-lg">תודה!</span>
              </div>
            </div>
          </div>
        </div>
      </StandardTemplate>
    </>
  );
}

IPO.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  let messages = null;

  switch (context.locale) {
    case "he":
      messages = await import("../compiled-lang/he.json");
      break;
    default:
      messages = await import("../compiled-lang/en.json");
      break;
  }

  const data = {};

  return {
    messages,
    data,
  };
};

export default IPO;
