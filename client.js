import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ah67pu4y",
  dataset: "production",
  apiVersion: '2021-03-25',
  useCdn: true,
});
