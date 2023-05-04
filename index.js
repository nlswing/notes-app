// index.js is the main file of our JavaScript program. 
// In other words, is the file that requires other files, but that is not required by any other.

// index.js
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

// 1. Setup the model with one note
const model = new NotesModel();
model.addNote('This is an example note');

// 2. Setup the view
const view = new NotesView(model);

// 3. Make the view display notes
view.displayNotes();