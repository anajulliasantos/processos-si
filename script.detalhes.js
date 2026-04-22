
// buscar informações de cada processo

const urlParams = new URLSearchParams(window.location.search);
const idProcesso = urlParams.get('id');

fetch('processos.json')
    .then(response => {
        if (!response.ok) throw new Error("Erro ao carregar o arquivo JSON");
        return response.json();
    })
    .then(data => {
        const dados = data[idProcesso];

        if (dados) {
            document.getElementById('titulo-processo').innerText = dados.titulo;
            document.getElementById('imagem-bpmn').src = dados.imagem;
            document.getElementById('texto-descricao').innerHTML = dados.descricao;
        } else {
            document.getElementById('titulo-processo').innerText = "Processo não encontrado";
        }
    })
    .catch(error => {
        console.error("Erro:", error);
        document.getElementById('titulo-processo').innerText = "Erro ao carregar dados.";
    });