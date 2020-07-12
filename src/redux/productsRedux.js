/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompareList = ({ products }) =>
  products.filter(product => product.compare === true);

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_WISHLIST = createActionName('CHANGE_WISHLIST');
const CHANGE_COMPARELIST = createActionName('CHANGE_COMPARELIST');
const CHANGE_USER_STARS = createActionName('CHANGE_USER_STARS');

/* action creators */
export const changeWishlist = payload => ({ payload, type: CHANGE_WISHLIST });
export const changeCompareList = payload => ({ payload, type: CHANGE_COMPARELIST });
export const changeUserStars = payload => ({ payload, type: CHANGE_USER_STARS });

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
    case CHANGE_COMPARELIST: {
      const newState = [...statePart];
      const index = newState.findIndex(product => product.id === action.payload);
      const compareList = newState.filter(product => product.compare === true);
      if (newState[index].compare) {
        newState[index].compare = false;
      } else if (compareList.length < 4) {
        newState[index].compare = true;
      } else {
        alert('You can compare only 4 products!');
      }
      return newState;
    }
    case CHANGE_USER_STARS: {
      const newState = [...statePart];
      const index = newState.findIndex(product => product.id === action.payload.id);
      if (
        newState[index].userStars &&
        newState[index].userStars === action.payload.star
      ) {
        newState[index].userStars = null;
      } else {
        newState[index].userStars = action.payload.star;
      }
      return newState;
    }
    default:
      return statePart;
  }
}
