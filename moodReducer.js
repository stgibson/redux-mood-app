const moodReducer = (state = {}, action) => {
  switch(action.type) {
    case "CHANGE_MOOD":
      return {
        ...state,
        mood: action.payload.mood,
        color: action.payload.color
      };
    default:
      return state;
  }
};