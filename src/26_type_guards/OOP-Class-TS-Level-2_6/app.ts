import Adele from "./classes/Adele";
import Madonna from "./classes/Madonna";
import MichaelJackson from "./classes/MichaelJackson";
import Singer from "./classes/Singer";
import WhitneyHouston from "./classes/WhitneyHouston";

const mj = new MichaelJackson();
const ma = new Madonna();
const wh = new WhitneyHouston();
const adele = new Adele();

const letsSing = (singer: Singer) => {
  let emoji = "";
  if (singer instanceof MichaelJackson) {
    emoji = "🕺🏽";
  } else if (singer instanceof Madonna) {
    emoji = "👱🏻‍♀️";
  } else if (singer instanceof WhitneyHouston) {
    emoji = "👩🏽‍🦱";
  } else if (singer instanceof Adele) {
    emoji = "👩🏼‍🦰";
  }
  console.log(`${emoji} ${singer._name} sings "${singer.sing()}"`);
};

letsSing(mj);
letsSing(ma);
letsSing(wh);
letsSing(adele);
