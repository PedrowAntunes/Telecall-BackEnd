document.addEventListener('DOMContentLoaded', () => {
  // Configurações do banco de dados
const host = '127.0.0.1';
const usuario = 'root';
const senha = '1234';
const bancoDados = 'Telefonia';

// Conexão ao banco de dados MySQL
const mysql = require('mysql');
const conexao = mysql.createConnection({
    host: host,
    user: usuario,
    password: senha,
    database: bancoDados
});

// Conectar ao banco de dados
conexao.connect((erro) => {
    if (erro) {
        console.error('Erro na conexão com o banco de dados: ' + erro.message);
        return;
    }

    console.log('Conexão bem-sucedida ao banco de dados');

    // Executar uma consulta simples
    const consultaSQL = 'SELECT * FROM Login';
    conexao.query(consultaSQL, (erro, resultados) => {
        if (erro) {
            console.error('Erro na consulta: ' + erro.message);
            return;
        }

        // Exibir os resultados no frontend
        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = JSON.stringify(resultados, null, 2);

        // Exibir os resultados no console
        console.log('Resultados da consulta:', resultados);

        // Fechar a conexão após a consulta
        conexao.end();
    });
});

});
