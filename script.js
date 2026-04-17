const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Isabelly Rosa de Arruda, você está navegando na internet para pesquisar um trabalho escolar. Um anúncio oferece 'respostas prontas e rápidas' para todas as suas dúvidas usando IA. O que você pensa?",
        alternativas: [
            {
                texto: "Parece útil! Vou usar a IA para me ajudar a encontrar informações mais rápido.",
                afirmacao: "Você aprendeu a usar a IA como uma ferramenta de busca inteligente, otimizando seu tempo na internet. "
            },
            {
                texto: "Prefiro pesquisar em sites confiáveis e livros, sem depender de IA.",
                afirmacao: "Você decidiu confiar apenas em fontes tradicionais, mas pode demorar mais para encontrar o que precisa."
            }
        ]
    },
    {
        enunciado: "Isabelly, a IA sugeriu algumas informações, mas você desconfia que podem não ser verdadeiras. O que você faz?",
        alternativas: [
            {
                texto: "Verifico as informações em outros sites confiáveis antes de usar.",
                afirmacao: "Você aprendeu a importância do senso crítico e de verificar fontes na internet."
            },
            {
                texto: "Confio na IA e uso as informações sem questionar.",
                afirmacao: "Você percebeu que a IA pode errar ou gerar informações falsas (alucinações) e precisa ter cuidado."
            }
        ]
    },
    {
        enunciado: "Seu professor pede para citar as fontes da sua pesquisa na internet. Como a IA pode te ajudar?",
        alternativas: [
            {
                texto: "Peço para a IA me ajudar a organizar as referências dos sites que usei.",
                afirmacao: "Você entende que a IA pode auxiliar na formatação, mas as fontes originais são sua responsabilidade."
            },
            {
                texto: "Peço para a IA inventar fontes para mim, para ser mais rápido.",
                afirmacao: "Você aprendeu que inventar fontes é plágio e antiético, mesmo com ajuda da IA."
            }
        ]
    },
    {
        enunciado: "Sua amiga pede ajuda para pesquisar na internet sobre fake news. Isabelly, o que você sugere?",
        alternativas: [
            {
                texto: "Ensino ela a usar a IA para encontrar artigos confiáveis, mas sempre verificando as fontes.",
                afirmacao: "Você se tornou uma referência em letramento digital e uso ético da IA na escola."
            },
            {
                texto: "Falo para ela não confiar em IA e pesquisar só em livros.",
                afirmacao: "Você prefere métodos tradicionais, mas percebe que isso pode limitar o acesso à informação atualizada."
            }
        ]
    },
    {
        enunciado: "No final do ano, a escola premia o melhor trabalho sobre 'Segurança na Internet'. Isabelly decide:",
        alternativas: [
            {
                texto: "Usar IA para pesquisar dados e estatísticas, mas escrever tudo com suas próprias palavras.",
                afirmacao: "Você aprendeu o equilíbrio perfeito: a IA acelera a pesquisa, mas seu conhecimento dá valor ao trabalho."
            },
            {
                texto: "Não usar IA para nada, pois acredita que pesquisar na internet com IA não é 'pesquisa de verdade'.",
                afirmacao: "Você ficou de fora de uma grande oportunidade por resistir às ferramentas modernas de pesquisa."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Isabelly Rosa de Arruda, sua jornada com IA na internet...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

// Relógio (corrigido com intervalo de 1 segundo)
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}, 1000);
