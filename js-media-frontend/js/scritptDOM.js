// function CalcularMedia() {
//     const nomeAluno = document.getElementById("nomeAluno").value;
//     const nota1 = parseFloat(document.getElementById("nota1").value);
//     const nota2 = parseFloat(document.getElementById("nota2").value);
//     const nota3 = parseFloat(document.getElementById("nota3").value);
//     const nota4 = parseFloat(document.getElementById("nota4").value);

const { createElement } = require("react");

//     let media = (nota1 + nota2 + nota3 + nota4) / 4;

//     document.getElementById("mediaAluno").value = media.toFixed(2);

//     if (media >= 7) {
//         document.getElementById("situacaoAluno").value = "Aprovado";
//     } else if (media >= 5) {
//         document.getElementById("situacaoAluno").value = "Em Recuperação";
//     } else {
//         document.getElementById("situacaoAluno").value = "Reprovado";
//     }
// }

function ExecutarTest() {
    // 1. Pegar conteúdo do input usando ID
    const conteudoInputNome = document.getElementById("nomeAluno").value;
    console.log("Nome do aluno:", conteudoInputNome);

    // 2. Pegar o elemento do formulário usando ID
    const inputNome = document.getElementById("nomeAluno");
    console.log(inputNome);

    // 3. Pegar conteúdo de um input pela classe - vamos pegar a nota 4 (5º input com a classe)
    const inputsTexto = document.getElementsByClassName("form__textbox");
    const nota4 = inputsTexto[3].value;
    console.log("Nota 4:", nota4);

    // 4. Pegar conteúdo usando tag (input) - nota 2 está na 3ª posição (índice 2)
    const inputs = document.getElementsByTagName("input");
    const nota2 = inputs[2].value; // 0: nome, 1: nota1, 2: nota2
    console.log("Nota 2:", nota2);

    // 5. Pegar conteúdo de uma tag <p>
    const conteudoP = document.getElementsByTagName("p")[0].textContent;
    console.log("Conteúdo do <p>:", conteudoP);

    // 6. Mudar valor do input nome para "Mariazinha"
    document.getElementById("nomeAluno").value = "Mariazinha";

    // 7. Mudar valor de um elemento tag - a tag p - Trocar para "Avaliação final do aluno"
    document.getElementsByTagName("p")[0].textContent = "Avaliação final do aluno"

    // 8. Inserir <li> em uma <ul> preexistente
    const ul = document.getElementById("lista")
    ul.innerHTML = "<li> item </li>"

    // OU

    let ul2 = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.innerHTML = "TEXTO";
    ul2.appendChild(li);


    //Mudar a cor da elemento p - utilizando a propriedade style
    const elementoP = document.getElementsByTagName("p")[0];
    elementoP.style.color = "blue";

    // Mudar a cor de fundo do formulario - utilizando a propriedade style
    const formulario = document.getElementById("form");
    formulario.style.backgroundColor = "purple";

}
