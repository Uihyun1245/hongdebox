const TOGGLE_MENU = "toggle/TOGGLE_MENU";

export const toggle = () => ({
  type: TOGGLE_MENU,
});

const initalState = {
  active: false,
};

const toggleMenu = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { active: !state.active };
    default:
      return state;
  }
};

export default toggleMenu;
