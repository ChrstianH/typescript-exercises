type BasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE";

type RealColors = Exclude<BasicColors, "BLACK" | "WHITE">;

const showColors = (realColor: RealColors) => console.log(realColor);

showColors("GREEN");
// showColors("BLACK"); // Das Argument vom Typ ""BLACK"" kann dem Parameter vom Typ "RealColors" nicht zugewiesen werden.
