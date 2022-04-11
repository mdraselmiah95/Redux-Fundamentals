export const portalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PATIENT":
      return {
        ...state,
      };
      break;

    default:
      return state;
      break;
  }
};
