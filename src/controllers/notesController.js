const service = require('../services/notesService');

exports.getAll = (req, res) => {
  res.json(service.getAll());
};

exports.getById = (req, res) => {
  const note = service.getById(req.params.id);

  if (!note) return res.status(404).json({ erro: 'Nota não encontrada' });

  res.json(note);
};

exports.create = (req, res) => {
  const { titulo, texto } = req.body;

  if (!titulo || !texto) {
    return res.status(400).json({ erro: 'Campos obrigatórios' });
  }

  res.status(201).json(service.create(titulo, texto));
};

exports.update = (req, res) => {
  const updated = service.update(req.params.id, req.body.titulo, req.body.texto);

  if (!updated) return res.status(404).json({ erro: 'Nota não encontrada' });

  res.json(updated);
};

exports.remove = (req, res) => {
  const deleted = service.remove(req.params.id);

  if (!deleted) return res.status(404).json({ erro: 'Nota não encontrada' });

  res.status(204).send();
};