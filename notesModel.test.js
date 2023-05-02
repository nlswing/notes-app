const NotesModel = require('./notesmodel.js');

describe (NotesModel, () => {
  const model = new NotesModel();

  test("creates an empty array", () => {
    expect(model.getNotes()).toEqual([]);
  });

describe (NotesModel, () => {
  const model = new NotesModel();
  model.addNote('Buy milk');
  model.addNote('Go to the gym');

  test("adds item to an array", () => {
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });
})

describe (NotesModel, () => {
  const model = new NotesModel();
  model.addNote('Buy milk');
  model.addNote('Go to the gym');
  model.reset();

  test("adds item to an array", () => {
    expect(model.getNotes()).toEqual([]);
  });
})
})
