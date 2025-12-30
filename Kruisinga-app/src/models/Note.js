// src/models/Note.js
export class Note {
  constructor(row) {
    this.Date = row.Date;
    this.Text = row.Text;
    this.StudentID = row.leerling_id;
  }
}
