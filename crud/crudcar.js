const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//----carro---//
let proximoIdCarro = 1;
let carros = [];
//----Cliente---///
let clientes = [];
let proximoIdCliente = 1;
//-----Aluguel---///
let alugueis = []
let proximoIdAluguel = 1


function mostrarMenu() {
    console.log("\n========================");
    console.log("SISTEMA DO CARRO")
    console.log("==========================");
    console.log("1 -Cadastrar os carros");
    console.log("2 -Listar Carros");
    console.log("3 -Buscar Carro por ID");
    console.log("4 -Atualizar o Carro");
    console.log("5 -Remover o Carro");
    console.log("=========================");
    console.log("SISTEMA DE CLIENTES");
    console.log("=========================");
    console.log("6 -Cadastrar Clientes");
    console.log("7 -Listar Clientes");
    console.log("8 -Buscar Cliente por ID");
    console.log("9 -Atualizar Cliente");
    console.log("10 -Remover Cliente");

    rl.question("Escolha opção:", (opcao) => {
        if (opcao === "1") {
            cadastrarCarro();
        } else if (opcao === "2") {
            listarCarro();
        } else if (opcao === "3") {
            buscarCarroPorId();
        } else if (opcao === "4") {
            atualizarCarro();
        } else if (opcao === "5") {
            removerCarro();
        } else if (opcao === "6") {
            cadastrarCliente();
        } else if (opcao === "7") {
            listarCliente();
        } else if (opcao === "8") {
            buscarClientePorId();
        } else if (opcao === "9") {
            atualizarCliente();
        } else if (opcao === "10") {
            removerCliente();
        } else if (opcao === "11") {
            realizarAluguel();
        } else if (opcao === "12") {
            devolverCarro();
        } else if (opcao === "13") {
            listarAlugueis();
        } else if (opcao === "14") {
            listarAlugueisAtivos();
        } else if (opcao === "15") {
            listarAlugueisFinalizados();
        }
    })
}
function realizarAluguel() {
    console.log("Realizar Aluguel");

    rl.question("Digite os dias: ", (dias) => {
        rl.question("Digite o total: ", (total) => {
            rl.question("Digite o Status: ", (status) => {
                    dias = Number(dias);
                    total = Number(total);

                    if (dias === "" || total === "" || status === "" ) {
                        console.log("ERRO: Não preencheu todas as infos");
                        mostrarMenu();
                        return;
                    }

                    let alugueis = {
                        id: proximoIdAluguel,
                        dias: dias,
                        total: total,
                        status: status
                    };

                    alunos.push(aluno);
                    proximoId++;

                    console.log("Aluno Cadastrado com sucesso")
                    mostrarMenu();
                })
            })
        })
    }


//----Cliente----//
function removerCliente() {
    console.log("Remover Cliente")

    rl.question("Escreva ID cliente para remover:", (id) => {
        id = Number(id)
        let cliente = encontrarClientePorId(id);


        for (let i = 0; i < clientes.length; i++) {

            if (clientes[i].id === id) {
                clientes.splice(i, 1);

                console.log("Cliente removido com secesso")
                mostrarMenu();
                return;
            }

        }
        console.log("Cliente nao encontrado")
        mostrarMenu();

    })
}
function atualizarCliente() {
    console.log("Atualizar Cliente");

    rl.question("Digite ID do cliente:", (id) => {
        id = Number(id);

        let cliente = encontrarClientePorId(id);

        if (cliente === null) {
            console.log("Cliente não encontrado");
            mostrarMenu();
            return;
        }
        rl.question("Novo cpf:", (novocpf) => {
            rl.question("Novo nome:", (novonome) => {
                rl.question("Novo telefone:", (novotelefone) => {

                    if (novocpf === "" || novonome === "" || novotelefone === "") {
                        mostrarMenu();
                        return;
                    }
                    cliente.name = novonome;
                    cliente.cpf = novocpf;
                    cliente.telefone = novotelefone;
                    console.log("Atualizado com sucesso");
                    mostrarMenu();
                })
            })
        })
    })
}
function buscarClientePorId() {
    console.log("Buscar Cliente po ID");


    rl.question("Ecreva  ID:", (id) => {
        id = Number(id);

        let cliente = encontrarClientePorId(id);

        if (cliente === null) {
            console.log("ID não encontrado");
            mostrarMenu();
            return;
        }

        console.log("\nID:", + cliente.id);
        console.log("Nome:", cliente.name);
        console.log("CPF:", + cliente.cpf);
        console.log("Telefone:", +cliente.telefone);

        mostrarMenu();

    })
}
function listarCliente() {
    console.log("Listar Carro")

    if (clientes.length === 0) {
        console.log("Nenhum cliente encontrado");
        mostrarMenu();
        return;
    }
    for (let i = 0; i < clientes.length; i++) {
        console.log("\nID:", +clientes[i].id);
        console.log("Nome:", clientes[i].name);
        console.log("Cpf:", +clientes[i].cpf);
        console.log("Telefone:", +clientes[i].telefone);

    }
    mostrarMenu();
}

function cadastrarCliente() {
    console.log("Cadastrar Cliente")

    rl.question("Escreva nome do cliente:", (nome) => {
        rl.question("Escreva o cpf:", (cpf) => {
            rl.question("Escreva telefone:", (telefone) => {

                if (nome === "" || cpf === "" || telefone === "") {
                    console.log("ERRO:Não preencheu todo campo");
                    mostrarMenu();
                    return;
                }
                let cliente = {
                    id: proximoIdCliente,
                    name: nome,
                    cpf: cpf,
                    telefone: telefone
                };

                clientes.push(cliente);
                proximoIdCliente++;

                console.log("Cadastrado com sucesso");
                mostrarMenu();

            })
        })
    })
}

function encontrarClientePorId(id) {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id === id) {
            return clientes[i];
        }
    }

    return null;
}




//-----------------CARRO----------------//
function removerCarro() {
    console.log("Remover o Carro")

    rl.question("Escolha ID do carro para remover:", (id) => {
        id = Number(id);

        let carro = encontrarCarroPorId(id);

        if (carro === null) {
            console.log("Carro não encontrado:")
            mostrarMenu();
            return;
        }
        for (let i = 0; i < carros.length; i++) {
            if (carros[i].id === id) {
                carros.slice(i, 1);
            }

        }
        console.log("Carro removido com sucesso");
        mostrarMenu();
    })
}
function atualizarCarro() {
    console.log("Atualizar Carro:");

    rl.question("Escreva o ID:", (id) => {
        id = Number(id);

        let carro = encontrarCarroPorId(id);

        if (carro == null) {
            console.log("Carro não encontrado")
            mostrarMenu();
            return;
        }
        rl.question("Digite novo Modelo:", (novoModelo) => {
            rl.question("Digite nova Placa:", (novaPlaca) => {
                rl.question("Digite novo preco:", (novoPreco) => {
                    rl.question("Digite novo ano:", (novoAno) => {
                        novoAno = Number(novoAno);
                        novoPreco = Number(novoPreco);

                        if (novoModelo === "" || novaPlaca === "" || novoAno === "" || novoPreco === "") {
                            console.log("ERRO: Não preencheu todas as infos");
                            mostrarMenu();
                            return;
                        }
                        carro.modelo = novoModelo;
                        carro.placa = novaPlaca;
                        carro.preco = novoPreco;
                        carro.ano = novoAno;
                        carro.disponivel = true;

                        console.log("Cadastro Atualizado");
                        mostrarMenu();
                    })
                })
            })
        })
    })

}
function listarCarro() {
    console.log("Listar Carro");

    if (carros.length === 0) {
        console.log("Nenhum carro cadastrado");
        mostrarMenu();
        return;
    }
    for (let i = 0; i < carros.length; i++) {
        console.log("\nID:" + carros[i].id);
        console.log("Modelo:" + carros[i].modelo);
        console.log("Placa:", carros[i].placa);
        console.log("Preco:" + carros[i].preco);
        console.log("Disponivel:" + carros[i].disponivel);

    }
    mostrarMenu();
}
function cadastrarCarro() {
    console.log("Cadastrar Carro");

    rl.question("Digite modelo carro:", (modelo) => {
        rl.question("Digite a placa:", (placa) => {
            rl.question("Digite ano: ", (ano) => {
                rl.question("Digite precoPorDia:", (preco) => {
                    ano = Number(ano);
                    preco = Number(preco);

                    if (modelo === "" || placa === "" || ano === "" || preco === "") {
                        console.log("ERRO: Não preencheu todas as infos");
                        mostrarMenu();
                        return;
                    }
                    let carro = {
                        id: proximoIdCarro,
                        modelo: modelo,
                        placa: placa,
                        ano: ano,
                        preco: preco,
                        disponivel: true

                    };
                    carros.push(carro);
                    proximoIdCarro++;

                    console.log("Cadastro com sucesso")
                    mostrarMenu();
                })
            })
        })
    })
}

function buscarCarroPorId() {
    console.log("Buscar Carro por ID");

    rl.question("Escreva o ID do carro:", (id) => {
        id = Number(id);

        let carro = encontrarCarroPorId(id);

        if (carro === null) {
            console.log("Carro não encontrado");
            mostrarMenu();
            return;
        }
        console.log("\n Carro encontrado");
        console.log("ID" + carro.id);
        console.log("Modelo:" + carro.modelo);
        console.log("Placa:" + carro.placa);
        console.log("Preco:" + carro.preco);
        console.log("Disponivel:" + carro.disponivel);
        mostrarMenu();
    })



}

function encontrarCarroPorId(id) {
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].id === id) {
            return carros[i];
        }
    }
    return null;
}
mostrarMenu();