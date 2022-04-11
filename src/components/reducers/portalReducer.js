export const portalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PATIENT":
      console.log(action);
      return {
        ...state,
      };
      break;

    default:
      return state;
      break;
  }
};
