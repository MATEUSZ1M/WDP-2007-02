/* selectors */
export const getAll = ({ promotion }) => promotion;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
