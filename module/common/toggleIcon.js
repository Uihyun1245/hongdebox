const TOGGLE_MENU = "toggle/TOGGLE_MENU";
const GET_TOGGLE_STATE = "toggle/GET_TOGGLE_STATE";
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
  type: MENU_CLOSE,s
});
export const getToggleState = (name) => ({
  type: GET_TOGGLE_STATE,
  toggleName: name,
});

const initalState = [
  {
    toggleName: "",
    active: false,
  },
  {
    toggleName: "",
    active: false,
  },
];

const toggleMenu = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      const index = state.findIndex(
        (obj) => obj.toggleName == action.toggleName
      );
      if (index === -1) {
        return [
          ...state,
          {
            toggleName: action.toggleName,
            active: true,
          },
        ];
      } else {
        state[index] = {
          toggleName: action.toggleName,
          active: !state[index]["active"],
        };
        return state;
      }
    case MENU_CLOSE:
      return {
        ...state,
        active: false,
      };
    case GET_TOGGLE_STATE:
      const toggleIndex = state.findIndex(
        (obj) => obj.toggleName == action.toggleName
      );
      return state[toggleIndex]["active"];
    default:
      return state;
  }
};

export default toggleMenu;
