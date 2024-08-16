import Alien from "../classes/Alien";

const alien1: Alien = new Alien("Xylaris", "Schimmerndes Violett");
alien1._planet = "G-Veridia";
alien1._galaxy = "Andromexis-Galaxie";

const alien2: Alien = new Alien("Thraxor", "Tiefes Blau mit silbernen Adern");
alien2._planet = "Zarnath";
alien2._galaxy = "Kryon-Galaxie";

const alien3: Alien = new Alien("Zynara", "Glänzendes Bernstein-Orange");
alien3._planet = "Thalora";
alien3._galaxy = "Vortexia-Galaxie";

console.log(alien1);
console.log(alien2);
console.log(alien3);
