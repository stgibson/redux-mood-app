const store = Redux.createStore(moodReducer);

const $face = $("#face");
const $happyButton = $("#happy");
const $sadButton = $("#sad");
const $angryButton = $("#angry");
const $confusedButton = $("#confused");
const $randomButton = $("#random");

function handleChange() {
  $face.text(store.getState().mood);
  $face.css("color", store.getState().color);
}

store.subscribe(handleChange);

$happyButton.on("click", () => {
  store.dispatch({
    type: "CHANGE_MOOD",
    payload: { mood: moods.happy.face, color: moods.happy.color }
  });
});

$sadButton.on("click", () => {
  store.dispatch({
    type: "CHANGE_MOOD",
    payload: { mood: moods.sad.face, color: moods.sad.color }
  });
});

$angryButton.on("click", () => {
  store.dispatch({
    type: "CHANGE_MOOD",
    payload: { mood: moods.angry.face, color: moods.angry.color }
  });
});

$confusedButton.on("click", () => {
  store.dispatch({
    type: "CHANGE_MOOD",
    payload: { mood: moods.confused.face, color: moods.confused.color }
  });
});

$randomButton.on("click", () => {
  const randIdx = Math.floor(Math.random() * Object.keys(moods).length);
  const randMood = Object.keys(moods)[randIdx];
  store.dispatch({
    type: "CHANGE_MOOD",
    payload: { mood: moods[randMood].face, color: moods[randMood].color }
  });
});