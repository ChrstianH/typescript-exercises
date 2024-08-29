const promise1: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exercise1Done = true;
    if (exercise1Done) {
      resolve("Exercise 1 done");
    } else {
      reject();
    }
  }, 20000);
});

const promise2: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exercise2Done = true;
    if (exercise2Done) {
      resolve("Exercise 2 done");
    } else {
      reject();
    }
  }, 30000);
});

const promise3: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exercise3Done = true;
    if (exercise3Done) {
      resolve("Exercise 3 done");
    } else {
      reject();
    }
  }, 40000);
});

const pElem = document.querySelector("p") as HTMLParagraphElement;

promise1
  .then((resp) => {
    pElem.textContent = resp;
  })
  .catch((err) => {
    console.error(err);
  });

promise2
  .then((resp) => {
    pElem.textContent += " - " + resp;
  })
  .catch((err) => {
    console.error(err);
  });

promise3
  .then((resp) => {
    pElem.textContent += " - " + resp;
  })
  .catch((err) => {
    console.error(err);
  });
