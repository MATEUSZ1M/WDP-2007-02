/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_WISHLIST = createActionName('CHANGE_WISHLIST');

/* action creators */
export const changeWishlist = payload => ({ payload, type: CHANGE_WISHLIST });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_WISHLIST: {
      const newState = [...statePart];
      const index = newState.findIndex(product => product.id === action.payload);
      if (newState[index].wishlist) {
        newState[index].wishlist = !newState[index].wishlist;
      } else {
        newState[index].wishlist = true;
      }
      return newState;
    }
    default:
      return statePart;
  }
}
