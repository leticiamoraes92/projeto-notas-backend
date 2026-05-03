const { readFile, writeFile } = require('../utils/fileHandler');

const FILE = 'data.json';

exports.getAll = () => readFile(FILE);

exports.getById = (id) => {
  return readFile(FILE).find(n => n.id === id);
};

exports.create = (titulo, texto) => {
  const notes = readFile(FILE);

  const newNote = {
    id: Date.now().toString(),
    titulo,
    texto,
    criadoEm: new Date().toISOString()
  };

  notes.push(newNote);
  writeFile(FILE, notes);

  return newNote;
};

exports.update = (id, titulo, texto) => {
  const notes = readFile(FILE);
  const index = notes.findIndex(n => n.id === id);

  if (index === -1) return null;

  notes[index] = { ...notes[index], titulo, texto };
  writeFile(FILE, notes);

  return notes[index];
};

exports.remove = (id) => {
  const notes = readFile(FILE);
  const filtered = notes.filter(n => n.id !== id);

  if (notes.length === filtered.length) return false;

  writeFile(FILE, filtered);
  return true;
};