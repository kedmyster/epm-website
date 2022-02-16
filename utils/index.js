import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
const builder = imageUrlBuilder(client);

export function getSectionDataByName(data, name, lang) {
  console.log(data.content[lang]);
  if (data && data.content && data.content[lang]) {
    for (let i = 0; i < data.content[lang].length; i++) {
      let section = data.content[lang][i];

      if (section._type === name) {
        return section;
      }
    }
  }
}

export function urlFor(source) {
  return builder.image(source);
}

export function getId(name) {
  return name.toLowerCase().replace(/ /g, "-");
}
