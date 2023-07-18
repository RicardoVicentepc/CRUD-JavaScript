var pessoaModel = require("../models/pessoaModel");


function cadastrar(req, res){
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var sexo = req.body.sexoServer;

    if(nome == undefined){
        res.status(400).send("Seu nome está indefinido");
    }else if(email == undefined){
        res.status(400).send("Seu email está indefinido");
    }else if(sexo == undefined){
        res.status(400).send("Seu sexo está indefinido");
    }else{
        pessoaModel.cadastrar(nome, email, sexo)
            .then(
                function (result){
                    res.json(result);
                }
            ).catch(
                function (erro){
                    console.log(erro);
                    console.log("Erro ao realizar cadastro!!ERRO : " + erro.sqlMessage );
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }

}

function listarUsers(req, res){
    pessoaModel.listarUsers()
        .then( function (resultado){
            if(resultado.length > 0){
                res.status(200).json(resultado);
            }else {
                res.status(204).send("Nenhum Resultado Encontrado!")
            }
        }).catch( function (erro){
            console.log(erro);
            console.log("Houve um erro ao realizar o login");
            res.status(500).json(erro.sqlMessage);
        });
}

function editarUser (req, res){
    var id = req.body.idServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var sexo  = req.body.sexoServer;

    pessoaModel.editarUser(id, nome, email, sexo)
        .then( function(resultado){
            res.json(resultado);
        }).catch( function (erro){
            console.log(erro);
            console.log("Houve um erro ao realizar o post : " + erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function deletarUser(req, res){
    var id = req.params.id;

    pessoaModel.deletarUser(id)
        .then(function (resultado){
            res.json(resultado)
        }).catch(
            function (erro){
                console.log(erro);
                console.log("Erro ao deletar : " + erro.sqlMessage)
                res.status(500).json(erro.sqlMessage);
            }
        )
}
module.exports = {
    cadastrar,
    listarUsers,
    editarUser,
    deletarUser
}