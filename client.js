import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ah67pu4y",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-10-21",
  token: "",
  useCdn: false,
});
