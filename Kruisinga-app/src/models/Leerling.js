// src/models/Leerling.js
export class Leerling {
  constructor(row) {
    this.id = row.id;
    this.Voornaam = row.Voornaam;
    this.Achternaam = row.Achternaam;
    this.Adres = row.Adres;
    this.Postcode = row.Postcode;
    this.Woonplaats = row.Woonplaats;
    this.Telefoonnummer = row.Telefoonnummer;
    this.Email = row.Email;
    this.Geboortedatum = row.Geboortedatum;
    this.MedischeBijzonderheden = row.MedischeBijzonderheden;
    this.CBRnummer = row.CBRnummer;
    this.Theoriedatum = row.Theoriedatum;
    this.Digid = row.Digid;
    this.Gezondheidsverklaring = row.Gezondheidsverklaring;
    this.VvG = row.VvG;
    this.Notes = [];
  }

  addNote(note) {
    this.Notes.push(note);
  }
}
