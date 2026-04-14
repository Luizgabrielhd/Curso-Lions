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
//------------
let qtdalugado = 0;
let qtdcarro = 0;
let qtdDis = 0;
let qtdCliente = 0;
let soma =0;
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
    console.log("=========================");
    console.log("ALUGUEL");
    console.log("=========================");
    console.log("11 -Realizar Aluguel");
    console.log("12 -Devolver Carro");
    console.log("13 -Listar Todos os Aluguéis");
    console.log("14 -Listar Aluguéis Ativos");
    console.log("15 -Listar Histórico (Finalizados)");
    console.log("16 -Listar carros Disponiveis ");
    console.log("17 -Listar carros indisponíveis");
    console.log("18 -Buscar Placa do carro");
    console.log("19 -Resumo do estoque");
    console.log("20 -Listar clientes com total");
    console.log("0 -Sair");

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
        } else if (opcao === "0") {
            sair();
        } else if (opcao === "16") {
            listarCarroDisponiveis();
        } else if (opcao === "17") {
            listarCarrosIndisponíveis();
        } else if (opcao === "18") {
            buscarCarroPorPlaca();
        } else if (opcao === "19") {
            resumoDoEstoque();
        } else if (opcao === "20") {
            qtdClientes();
        } else if (opcao === "21"){
            buscarClientePorCpf();
        } else if (opcao === "22"){
            exibirRelatorioGeral();
        }
    })
}
function exibirRelatorioGeral() {
    console.log("\n=================================");
    console.log("      RELATÓRIO GERAL SISTEMA      ");
    console.log("=================================");

    
    console.log(`Total de Carros Cadastrados:    ${carros.length}`);
    console.log(`Total de Clientes Cadastrados:  ${clientes.length}`);
    console.log(`Total de Aluguéis Registrados: ${alugueis.length}`);

    
    const ativos = alugueis.filter(a => a.status === "ativo").length;
    const finalizados = alugueis.filter(a => a.status === "finalizado");
    
    
    const faturamentoTotal = finalizados.reduce((acc, a) => acc + a.total, 0);

    console.log(`Aluguéis Ativos no Momento:     ${ativos}`);
    console.log(`Aluguéis já Finalizados:        ${finalizados.length}`);
    console.log("---------------------------------");
    console.log(`FATURAMENTO TOTAL: R$ ${faturamentoTotal.toFixed(2)}`);
    console.log("=================================\n");

    mostrarMenu();
}
function buscarClientePorCpf (){
    console.log("Buscar Cliente po CPF");


    rl.question("Ecreva  CPF:", (cpf) => {
        cpf = Number(cpf);

        let cliente = encontrarClientePorCpf(cpf);

        if (cliente === null) {
            console.log("CPF não encontrado");
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
function encontrarClientePorCpf(cpf){
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].cpf === cpf) {
            return clientes[i];
        }
    }
    return null;

}


function qtdClientes() {
    console.log("Total clientes", qtdCliente);
    mostrarMenu();
    return;

}
function resumoDoEstoque() {
    console.log("Quantidade de carros Alugados:", qtdalugado);
    console.log("Quantidade de Carros:", qtdcarro);
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].disponivel === true) {
            qtdDis++;

            encontrou = true;
        }
    }
    console.log("Quantidade Carros Disponiveis:", qtdDis);
    mostrarMenu();
}
function buscarCarroPorPlaca() {
    console.log("Buscar Carro por placa");

    rl.question("Escreva placa do carro:", (placa) => {


        let carro = encontrarPlaca(placa);

        if (carro === null) {
            console.log("Placa não encontrado");
            mostrarMenu();
            return;
        }
        console.log("Modelo:", carro.modelo);
        console.log("Placa:", carro.placa);
        console.log("Ano:", carro.ano);
        console.log("Preço:", carro.preco);
        mostrarMenu();
    })
}
function encontrarPlaca(placa) {
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].placa === placa) {
            return carros[i];
        }
    }
    return null;
}
function listarCarrosIndisponíveis() {
    console.log("Carros Indisponiveis");

    let encontrou = true;

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].disponivel === false) {
            console.log(`ID: ${carros[i].id} | Modelo: ${carros[i].modelo} | Placa: ${carros[i].placa} | Preço: R$${carros[i].preco}`);
            encontrou = true;
        }
    }
    mostrarMenu();
}

function listarCarroDisponiveis() {
    console.log("Carros Disponíveis");

    let encontrou = false;

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].disponivel === true) {
            console.log(`ID: ${carros[i].id} | Modelo: ${carros[i].modelo} | Placa: ${carros[i].placa} | Preço: R$${carros[i].preco}`);
            encontrou = true;
        }
    }

    if (!encontrou) {
        console.log("Não há nenhum carro disponível no momento.");
    }

    mostrarMenu();
}
//Aluguel
function realizarAluguel() {
    console.log("\n--- Realizar Aluguel ---");

    rl.question("ID do Cliente: ", (idCliente) => {
        rl.question("ID do Carro: ", (idCarro) => {
            rl.question("Quantidade de dias: ", (dias) => {

                const idCarroNum = Number(idCarro);
                const cliente = encontrarClientePorId(Number(idCliente));
                const carro = encontrarCarroPorId(idCarroNum);
                const numDias = Number(dias);

                if (!cliente) {
                    console.log("ERRO: Cliente não encontrado!");
                    return mostrarMenu();
                }
                if (!carro) {
                    console.log("ERRO: Carro não encontrado!");
                    return mostrarMenu();
                }

                
                const jaEstaAlugado = alugueis.some(a => a.idCarro === idCarroNum && a.status === "ativo");

                if (!carro.disponivel || jaEstaAlugado) {
                    console.log("ERRO: Este carro já possui um aluguel ativo e não pode ser alugado!");
                    return mostrarMenu();
                }

                let total = numDias * carro.preco;

                let novoAluguel = {
                    id: proximoIdAluguel++,
                    idCliente: cliente.id,
                    nomeCliente: cliente.name,
                    idCarro: carro.id,
                    modeloCarro: carro.modelo,
                    dias: numDias,
                    total: total,
                    status: "ativo"
                };

                alugueis.push(novoAluguel);
                carro.disponivel = false;
                qtdalugado++;

                console.log(`\nAluguel realizado com sucesso! Total: R$ ${total.toFixed(2)}`);
                mostrarMenu();
            });
        });
    });
}
        

function devolverCarro() {
    console.log("\n--- Devolver Carro ---");
    rl.question("Digite o ID do ALUGUEL para encerrar: ", (id) => {
        let aluguel = null;
        for (let a of alugueis) {
            if (a.id === Number(id) && a.status === "ativo") {
                aluguel = a;
                break;
            }
        }

        if (!aluguel) {
            console.log("Aluguel ativo não encontrado.");
            return mostrarMenu();
        }



        aluguel.status = "finalizado";
        let carro = encontrarCarroPorId(aluguel.idCarro);
        if (carro) carro.disponivel = true;

        console.log("Carro devolvido com sucesso!");
        mostrarMenu();
    });
}


function listarAlugueis() {
    console.log("\n--- Histórico Geral de Aluguéis ---");
    if (alugueis.length === 0) {
        console.log("Nenhum registro.");
    }

    for (const a of alugueis) {
        console.log(`ID: ${a.id} | Carro: ${a.modeloCarro} | Cliente: ${a.nomeCliente} | Status: ${a.status} | Total: R$${a.total}`);
    }
    mostrarMenu();
}

function listarAlugueisAtivos() {
    console.log("\n--- Aluguéis ATIVOS ---");

    const ativos = alugueis.filter(a => a.status === "ativo");

    if (ativos.length === 0) {
        console.log("Não há aluguéis ativos no momento.");
        return mostrarMenu();
    }

    let totalEmAberto = 0;


    for (const a of ativos) {
        console.log(`ID: ${a.id} | Carro: ${a.modeloCarro} | Cliente: ${a.nomeCliente} | Valor: R$${a.total.toFixed(2)}`);
        totalEmAberto += a.total;
    }

    console.log("-----------------------------------------");
    console.log(`TOTAL EM ABERTO: R$ ${totalEmAberto.toFixed(2)}`);
    console.log("-----------------------------------------");
    
    mostrarMenu();
}

function listarAlugueisFinalizados() {
    console.log("\n--- Histórico (Finalizados) ---");
    const finalizados = alugueis.filter(a => a.status === "finalizado");

    if (finalizados.length === 0) {
        console.log("Nenhum aluguel finalizado.");
    }

    for (const a of finalizados) {
        console.log(`ID: ${a.id} | Carro: ${a.modeloCarro} | Total Pago: R$${a.total}`);
    }
    mostrarMenu();
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

                for (let i = 0; i < clientes.length; i++) {
                    if (clientes[i].cpf === cpf) {
                        console.log("ERRO CPF Duplicado")
                        mostrarMenu();
                        return;
                    }
                }


                let cliente = {
                    id: proximoIdCliente,
                    name: nome,
                    cpf: cpf,
                    telefone: telefone
                };

                clientes.push(cliente);
                proximoIdCliente++;
                qtdCliente++;


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
function sair() {
    rl.close();
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

        } if (carro.disponivel === false) {
            console.log("Carro Alugado não pode ser removido");
            mostrarMenu();
            return;
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
                    for (let i = 0; i < carros.length; i++) {
                        if (carros[i].placa === placa) {
                            console.log("ERRO:Carro com placa duplicada");
                            mostrarMenu();
                            return;
                        }
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
                    qtdcarro++;

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
        console.log("ID", + carro.id);
        console.log("Modelo:", carro.modelo);
        console.log("Placa:", + carro.placa);
        console.log("Preco:", + carro.preco);
        console.log("Disponivel:",
            + carro.disponivel);
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