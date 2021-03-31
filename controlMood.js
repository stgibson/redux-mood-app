const store = Redux.createStore(moodReducer);

const $face = $("#face");
const $happyButton = $("#happy");
const $sadButton = $("#sad");
const $angryButton = $("#angry");
const $confusedButton = $("#confused");

$happyButton.on("click", () => {
  store.dispatch({ type: "CHANGE_FACE", mood: happy });
  $face.text(store.getState().mood);
});

$sadButton.on("click", () => {
  store.dispatch({ type: "CHANGE_FACE", mood: sad });
  $face.text(store.getState().mood);
});

$angryButton.on("click", () => {
  store.dispatch({ type: "CHANGE_FACE", mood: angry });
  $face.text(store.getState().mood);
});

$confusedButton.on("click", () => {
  store.dispatch({ type: "CHANGE_FACE", mood: confused });
  $face.text(store.getState().mood);
});