const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
  id_turma: String,
  nome_turma: String,
  id_professor: String,
  periodo: String,
});

module.exports = mongoose.model('Turma', TurmaSchema);