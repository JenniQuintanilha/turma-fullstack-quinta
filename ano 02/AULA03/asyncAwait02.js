async function obterDadosDoservidor(id) {
    const resposta = await fetch (`http://pokeapi.co/api/v2/pokemon/${id}`);

    const dados = await resposta.json();
    console.log("Nome:", dados.name);
}

obterDadosDoservidor(250);