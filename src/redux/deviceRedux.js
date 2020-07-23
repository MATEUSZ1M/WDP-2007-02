/* selectors */
export const getDevice = ({ device }) => device;

/* action name creator */
const reducerName = 'device';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_DEVICE = createActionName('SET_DEVICE');

/* action creators */
export const setDevice = payload => ({ payload, type: SET_DEVICE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_DEVICE: {
      const breakpoints = {
        tablet: 992,
        mobile: 768,
        smobile: 375,
      };

      if (action.payload >= breakpoints.tablet) {
        return 'desktop';
      } else if (action.payload >= breakpoints.mobile) {
        return 'tablet';
      } else if (action.payload >= breakpoints.smobile) {
        return 'mobile';
      } else {
        return 'smobile';
      }
    }
    default:
      return statePart;
  }
}
