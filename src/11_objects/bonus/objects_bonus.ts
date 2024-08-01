import { singersTwo, SingerTwo } from "../data/singersTwo";

const tableContainerElement = document.getElementById(
  "table-container"
) as HTMLElement;

let copySingersTwo = [...singersTwo];
let tableElement = document.createElement("table");

function resetTable(): void {
  tableContainerElement.innerHTML = "";
  tableElement = document.createElement("table");
}

function showSingersTable(): void {
  tableContainerElement.appendChild(tableElement);

  let tableHeaderRow = document.createElement("tr");
  tableElement.appendChild(tableHeaderRow);

  let tableHeaderElement1 = document.createElement("th");
  tableHeaderRow.appendChild(tableHeaderElement1);
  tableHeaderElement1.textContent = "Name";
  tableHeaderElement1.style.width = "150px";

  let tableHeaderElement2 = document.createElement("th");
  tableHeaderRow.appendChild(tableHeaderElement2);
  tableHeaderElement2.textContent = "Country";
  tableHeaderElement2.style.width = "150px";

  let tableHeaderElement3 = document.createElement("th");
  tableHeaderRow.appendChild(tableHeaderElement3);
  tableHeaderElement3.textContent = "Period Active";
  tableHeaderElement3.style.width = "200px";

  let tableHeaderElement4 = document.createElement("th");
  tableHeaderRow.appendChild(tableHeaderElement4);
  tableHeaderElement4.textContent = "Genre";
  tableHeaderElement4.style.width = "250px";
}

function showSingers(): void {
  copySingersTwo.forEach((singer: SingerTwo) => {
    let tableRow = document.createElement("tr");
    tableElement.appendChild(tableRow);

    let tableRowElement1 = document.createElement("td");
    tableRow.appendChild(tableRowElement1);
    tableRowElement1.textContent = singer.name;

    let tableRowElement2 = document.createElement("td");
    tableRow.appendChild(tableRowElement2);
    tableRowElement2.textContent = singer.country;

    let tableRowElement3 = document.createElement("td");
    tableRow.appendChild(tableRowElement3);
    let periodActive =
      singer.period_active.start.toString() +
      " - " +
      singer.period_active.end.toString();
    if (singer.period_active.extra) {
      periodActive += ", extra: " + singer.period_active.extra.toString();
    }
    tableRowElement3.textContent = periodActive;

    let tableRowElement4 = document.createElement("td");
    tableRow.appendChild(tableRowElement4);
    tableRowElement4.textContent = singer.genre;
  });
}
resetTable();
showSingersTable();
showSingers();
const searchButton = document.getElementById("search-button");

searchButton?.addEventListener("click", function (event: MouseEvent) {
  event.preventDefault();
  const searchInputElement = document.getElementById(
    "searchInput"
  ) as HTMLInputElement;
  copySingersTwo = singersTwo.filter((singer: SingerTwo) => {
    return singer.name
      .toLowerCase()
      .includes(searchInputElement.value.toLowerCase());
  });
  resetTable();
  showSingersTable();
  showSingers();
});
