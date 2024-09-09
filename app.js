function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");


    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do bioma ou características</p>"
        return 
    }


    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = ""; 
    let exemplos= "";
    let curiosidades = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        curiosidades = dado.curiosidades.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campoPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || curiosidades.includes(campoPesquisa) || exemplos.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
                <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome} </a>
                </h2>
                <img src="${dado.imagem}" alt="${dado.nome}">
                <p class="descricao-meta">${dado.descricao} <br> <br> ${dado.curiosidades}  <br> <br> ${dado.exemplos}</p> <br>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
        `;

        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}


