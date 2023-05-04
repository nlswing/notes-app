const NotesModel = require('./notesModel');

describe('Notes model class', () => {
  it('returns an empty array', () => {
    const model = new NotesModel();
    
    expect(model.getNotes()).toEqual([]);
  });

  it('adds new notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('empties the array', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();

    expect(model.getNotes()).toEqual([]);
  });
});
