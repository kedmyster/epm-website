import imageUrlBuilder from '@sanity/image-url';
import client from "../client";
const builder = imageUrlBuilder(client);

export function getSectionDataByName(data, name) {
  if (data && data.content) {
    for (let i = 0; i < data.content.length; i++) {
      let section = data.content[i];

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
};