import Colors from "./special-color";

function randomColorGenerator() {
  return Colors[Math.floor(Math.random() * 10)];
}

export default randomColorGenerator;
