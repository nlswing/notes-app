const NotesModel = require('./notesModel.js');

describe("NotesModel", () => {
  const model = new NotesModel();

  test("defines setRule()", () => {
    expect(model.getNotes()).toEqual([]);
  });
});