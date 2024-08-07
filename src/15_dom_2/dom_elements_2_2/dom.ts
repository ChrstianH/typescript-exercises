type SimplePerson = {
  vorname: string;
  nachname: string;
  land: string;
};

const inputFields = document.querySelectorAll("input");

const buttonElement = inputFields[2] as HTMLInputElement;

buttonElement.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  const vorname: string = inputFields[0].value;
  const nachname: string = inputFields[1].value;
  const landSelect = document.getElementById("land") as HTMLSelectElement;
  const testPerson: SimplePerson = {
    vorname: vorname,
    nachname: nachname,
    land: landSelect.selectedOptions[0].innerText,
  };
  console.log(testPerson);
});
