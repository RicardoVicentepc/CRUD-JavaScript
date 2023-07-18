var database = require("../database/config");

function cadastrar(nome, email, sexo) {
    var instrucao =
        `
    insert into pessoa(nome, email, sexo)  values
	('${nome}', '${email}', '${sexo}');
    `

    return database.executar(instrucao);
}
function listarUsers() {
    var instrucao = `
        select * from pessoa;
    `
    return database.executar(instrucao);
}

function editarUser(idPessoa, nome, email, sexo){
    var instrucao = `
        update pessoa set nome = '${nome}', email = '${email}', sexo = '${sexo}' where id = '${idPessoa}';
    `
    return database.executar(instrucao);
}

function deletarUser(idPessoa){
    var instrucao = `
        delete from pessoa where id = ${idPessoa}
    `
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listarUsers,
    editarUser,
    deletarUser

}