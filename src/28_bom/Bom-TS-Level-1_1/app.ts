const waitXSeconds = (x: number): void => {
  setTimeout(() => {
    console.log("Kurze Textausgabe");
  }, x * 1000);
};

waitXSeconds(3);

const countToEvening = (): void => {
  let counter = 11;
  console.log("Start: Warten für 3 Sekunden...");
  setTimeout(
    () => console.log("Erledigt. Du hast 3 Sekunden verschwendet."),
    3000
  );
  const interval = setInterval(() => {
    counter--;
    if (counter === 0) {
      console.log("Feierabend");
      clearInterval(interval);
    } else {
      console.log(counter);
    }
  }, 1000);
};

setTimeout(countToEvening, 5000);
