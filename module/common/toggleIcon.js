const TOGGLE_MENU = "toggle/TOGGLE_MENU";
const CURRENT_MENU = "toggle/CURRENT_MENU";
const MENU_CLOSE = "toggle/MENU_CLOSE";
export const toggle = (name) => ({
  type: TOGGLE_MENU,
  toggleName: name,
});

export const setCurrentMenu = (id) => ({
  type: CURRENT_MENU,
  currentMenu: id,
});

export const menuClose = () => ({
  type: MENU_CLOSE,
});

const initalState = {};

const toggleMenu = (state = initalState, action) => {
  const toggleList = Object.keys(state);
  switch (action.type) {
    case TOGGLE_MENU:
      if (toggleList.includes(action.toggleName)) {
        state[action.toggleName] = {
          ...state[action.toggleName],
          active: !state[action.toggleName].active,
        };
      } else {
        state[action.toggleName] = {
          ...state[action.toggleName],
          active: true,
        };
      }
      return state;

    case MENU_CLOSE:
      if (toggleList.includes(action.toggleName)) {
        state[action.toggleName] = {
          ...state[action.toggleName],
          active: false,
        };
      }
      return state;
    default:
      return state;
  }
};

export default toggleMenu;
