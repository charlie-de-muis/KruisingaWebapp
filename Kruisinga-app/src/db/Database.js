// src/db/database.js
import initSqlJs from "sql.js";

let db = null;

export async function initDB(savedDbBytes) {
  const SQL = await initSqlJs({
    locateFile: file => `/sql-wasm.wasm`
  });

  if (savedDbBytes) {
    db = new SQL.Database(new Uint8Array(savedDbBytes));
  } else {
    db = new SQL.Database();
    createTables();
  }

  return db;
}

function createTables() {
  // false = 0, true = 1
  db.run(`
    CREATE TABLE IF NOT EXISTS Leerlingen (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      Voornaam TEXT,
      Achternaam TEXT,
      Adres TEXT,
      Postcode TEXT,
      Woonplaats TEXT,
      Telefoonnummer TEXT,
      Email TEXT,
      Geboortedatum TEXT,
      MedischeBijzonderheden TEXT,
      CBRnummer INTEGER,
      Theoriedatum TEXT,
      
      Digid INTEGER,
      Gezondheidsverklaring INTEGER,
      VvG INTEGER,
      Examendatum TEXT
    );

    CREATE TABLE IF NOT EXISTS Notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      leerling_id INTEGER,
      Date TEXT,
      Text TEXT
    );
  `);
}

