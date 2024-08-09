let person = {
  vorname: "Anton",
  nachname: "Fish",
  alter: 34,
  familienstand: "ledig",
  groesse: 1.78,
  zeigeProfil: function () {
    return `Name: ${this.vorname} ${this.nachname}<br>Alter: ${this.alter}<br>Körpergröße: ${this.groesse}<br>Familienstand: ${this.familienstand}`;
  },
};

// document.getElementById("person").innerHTML = person.zeigeProfil();

let person2 = {
  vorname: "Antonia",
  nachname: "Fisher",
  alter: 23,
  familienstand: "verheiratet",
  groesse: 1.77,
  zeigeProfil: () =>
    `Name: ${person2.vorname} ${person2.nachname}<br>Alter: ${person2.alter}<br>Körpergröße: ${person2.groesse}<br>Familienstand: ${person2.familienstand}`,
};

// document.getElementById("person").innerHTML = person2.zeigeProfil();
