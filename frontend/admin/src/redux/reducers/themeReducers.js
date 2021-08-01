const init = {
  sidebarShow: "responsive",
};

export const changeState = (state = init, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};
