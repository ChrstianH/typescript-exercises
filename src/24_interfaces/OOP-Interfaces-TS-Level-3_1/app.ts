import Manager from "./classes/Manager";
import Subordinate from "./classes/Subordinate";

const subordinate1: Subordinate = new Subordinate("Sub1", 20, "pos1");
const subordinate2: Subordinate = new Subordinate("Sub2", 23, "pos2");
const subordinate3: Subordinate = new Subordinate("Sub3", 27, "pos3");

const manager: Manager = new Manager("Manager", 45, "Board");

manager.addSubordinate(subordinate1);
manager.addSubordinate(subordinate2);
manager.addSubordinate(subordinate3);

console.table(manager);
