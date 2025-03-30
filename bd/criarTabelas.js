const Database = require('better-sqlite3');
const db = new Database('esmforum.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS perguntas (
    id_pergunta INTEGER PRIMARY KEY AUTOINCREMENT,
    texto TEXT NOT NULL,
    id_usuario INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS respostas (
    id_resposta INTEGER PRIMARY KEY AUTOINCREMENT,
    id_pergunta INTEGER NOT NULL,
    texto TEXT NOT NULL,
    FOREIGN KEY (id_pergunta) REFERENCES perguntas(id_pergunta)
  );
`);

console.log('Tabelas criadas com sucesso!');
