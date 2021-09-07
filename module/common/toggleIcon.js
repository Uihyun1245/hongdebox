const TOGGLE_MENU = "toggle/TOGGLE_MENU";
const CURRENT_MENU = "toggle/CURRENT_MENU";

export const toggle = () => ({
  type: TOGGLE_MENU,
});

export const setCurrentMenu = (id) => ({
  type: CURRENT_MENU,
  currentMenu: id,
});

const initalState = {
  currentMenu: 1,
  active: false,
};

const toggleMenu = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { 
        ...state,
        active: !state.active 
      };
    case CURRENT_MENU:
      return{
        ...state,
        currentMenu: action.currentMenu
      }
    default:
      return state;
  }
};

export default toggleMenu;
