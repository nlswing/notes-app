class NotesModel {
  constructor(array) {
    this.array = [];
  }
  getNotes() {
    return this.array;
  };

  addNote(task) {
    this.array.push(task);
  };

  reset() {
    this.array.length = 0;
  };
}

module.exports = NotesModel;

