const sign = {
  a: "Touch the thumb of your left hand with the index finger of your right hand.",
  b: "Make ‘O’ shape with your fingers in both of your hands separately. Put your hands together to make an OO shape.",
  c: "Make the pattern exactly like the letter ‘C’ with your right hand’s index finger and thumb. Fold the other fingers inwards.",
  d: "Point the left hand’s middle finger upward. Touch the tip of this finger with the index finger of your right hand. Touch the knuckle of the left hand’s index finger with the right hand’s thumb.",
  e: "Touch the tip of the index finger on your left hand with your right index finger.",
  f: "Put your right hand’s index and middle fingers on the ones on your left hand. Keep other fingers of both hands folded.",
  g: "Make both of your hands into fists with your thumbs tucked in, and place your right fist on top of your left fist",
  h: "Open up the left hand’s palm facing up. Put your right hand’s palm on the left hand’s one. Stroke the right hand in the forward direction, from your wrist to your fingertips",
  i: "Spread up your left palm and place your right index finger on the middle finger of your other hand.",
  j: "Spread your left palm open, facing up. Move your right index from the tip of the left middle finger down to its thumb as if you are writing the letter â€˜J’ on your hand",
  k: "Point upwards with your left hand, make a bent shape with your right index finger and hold it against the left index finger.",
  l: "Open and face your left palm upward. Right index finger rests on the middle of your left palm with its other fingers closed.",
  m: "Hold your left palm out and place the main three fingers on your right hand onto the palm of your left hand.",
  n: "Hold your left palm out and place your right index and middle finger in the middle of your palm.",
  o: "old your left palm out and place your right index finger on the tip of the left ring finger.",
  p: "Create a circle with your right index finger and thumb. Touch the tip of the left index finger to make a ‘P’ shape.",
  q: "Put your left thumb and finger together to make a circle, then hook your right index finger to your left thumb",
  r: "Curl the index finger of your right hand and place it on the palm of your left hand.",
  s: "Spread your left palm and lock the smallest finger on your left hand with the smallest finger on your right one.",
  t: "Keep your left hand open, palm facing up. Press the palm with your right index fingertip.",
  u: "Place your right index finger on the tip of the left smallest finger",
  v: "Make a â€˜V’ symbol with your right hand and rest it on your open left palm.",
  w: "Interlock the fingers of your both hands and point them up diagonally.",
  x: "Curl in all the fingers of your both hands except the index fingers. Make a cross with the index fingers.",
  y: "Extend your left thumb and index finger and place your right index finger between them.",
  z: "Open both your palms. Point your left palm upwards and touch the middle of it with the fingers of your right hand. Keep your right hand flat, parallel to the ground.",
};

const inputField = document.getElementById("input-field");
const letterContainer = document.getElementById("letters-container");

function changeLetters() {
  letterContainer.innerHTML = "";
  let name = inputField.value;
  let correctName = "";
  if (name.length !== 0) {
    for (let index = 0; index < name.length; index++) {
      const letter = name[index];

      if (letter.match(/[a-z]/i)) {
      let letterDiv = document.createElement("div");
      letterDiv.classList = "letter";
      letterDiv.innerHTML = `<p>${letter.toUpperCase()}</p>
                            <img src="images/${letter.toLowerCase()}.jpeg" />
                            <p>${sign[letter.toLowerCase()]}</p>`;
      letterContainer.appendChild(letterDiv);
      correctName = correctName + letter
      }
    }
    inputField.value = correctName;
  }
}

inputField.addEventListener("input", changeLetters);
