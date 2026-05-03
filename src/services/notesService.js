exports.create = (titulo, texto) => {
  const notes = readFile(FILE);

  const nextId =
    notes.length > 0
      ? Math.max(...notes.map(n => Number(n.id))) + 1
      : 1;

  const newNote = {
    id: String(nextId),
    titulo,
    texto,
    criadoEm: new Date().toISOString()
  };

  notes.push(newNote);
  writeFile(FILE, notes);

  return newNote;
};