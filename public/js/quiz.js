// Array de objetos contendo as perguntas, opções e respostas corretas do quiz
// feito no dia 21/06
const data = [
    {
        question: "Em que anos o São Paulo tanto conquistou a libertadores como o mundial de clubes? ",
        
        a: "1997, 2004, 2012",
        b: "1992, 1993, 2005",
        c: "1992, 1994, 2005",
        d: "1989, 1996, 2003",
        correct: "b",

    },
    {
        question:" Qual o jogador que passou pelo São Paulo tem mais jogos com a camisa tricolor?",
        a:"Raí",
        b:"Jonathan Calleri",
        c:"Rogério Ceni",
        d:"Serginho Chulapa",
        correct: "c",
    },
    {
        question: "Quantos títulos oficias tem o São Paulo?",
        a: "58",
        b: "23",
        c: "37",
        d: "60",
        correct: "a",

    },
    {
        question: "Qual jogador é conhecido como terror do Morumbi?",
        a: "Kaka",
        b: "Raí",
        c: "Luacas Moura",
        d: "Denílson",
        correct: "b",

    },
    {
        question: "uem fez o Primeiro Gol do SPFC na libertadores de 2005 e qual time sofreu o gol?",
        a: "Luizão / The Strongest (BOL)",
        b: "Cicinho / Universidad de Chile (CHI)",
        c: "Grafite / Penarol (URU)",
        d: "Danilo / The Strongest (BOL)",
        correct: "d",

    },


]

// Seleciona os elementos do DOM necessários para manipular o quiz
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")


const submitBtn = document.getElementById("botaoQuiz")

// Variáveis para controlar o estado atual do quiz
let currentQuiz = 0
let score = 0

// Carrega a pergunta e opções atuais no quiz
loadQuiz()

function loadQuiz() {
    deselectAnswer() // Desmarca qualquer resposta selecionada

    const currentQuizData = data[currentQuiz] // Obtém os dados da pergunta atual

     // Atualiza o texto das perguntas e opções no DOM
    questionEl.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d

    


}

// Função para desmarcar as respostas selecionadas
function deselectAnswer() {
    answerEls.forEach((answerEl) => (answerEl.checked = false
    )
    )

}


// Função para obter a resposta selecionada pelo usuário
function getSelected(){
    let answer

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id  // Define a resposta selecionada
        }
    })

    return answer // Retorna a resposta selecionada
}

// Adiciona um evento de clique ao botão de enviar resposta
submitBtn.addEventListener("click", () =>{
    const answer = getSelected() // Obtém a resposta selecionada

if(answer){
    // Verifica se a resposta está correta
    if(answer === data[currentQuiz].correct)
    score++ // Incrementa a pontuação
}
currentQuiz++ // Passa para a próxima pergunta

if(currentQuiz < data.length){
    loadQuiz()  // Carrega a próxima pergunta
}
else{
    // Obtém o ID do usuário do sessionStorage
    let id_usuario = sessionStorage.getItem("ID_USUARIO");
    
    // Envia os resultados do quiz para o servidor
    fetch("/medidas/quiz", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       // crie um atributo que recebe o valor recuperado aqui
       // Agora vá para o arquivo routes/usuario.js
       idUsuario: id_usuario, // Atributo ID do usuário
        acertos: score // Atributo acertos com a pontuação do quiz
 
       
     })
   })
   console.log("aaaa")

    // Exibe a pontuação final e um botão para reiniciar o quiz
    quiz.innerHTML = `<h2>Você acertou ${score}/${data.length} questões!</h2>
    <button style=" display: inline-block;
    background: #ecc998;
    color: #000;
    border: none;
    padding: 10px 20px;
    align-content: center;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.3s ease;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 20px;;" onclick="location.reload()">Vamos fazer de novo?</button>`
}
})