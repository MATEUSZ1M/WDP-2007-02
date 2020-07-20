/* selectors */
export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;
export const getGalleryCategory = ({ galleryCategory }) => galleryCategory;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
