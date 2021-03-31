const moodReducer = (state, action) => {
  switch(action.type) {
    case "CHANGE_FACE":
      return { ...state, mood: action.mood };
    default:
      return state;
  }
};