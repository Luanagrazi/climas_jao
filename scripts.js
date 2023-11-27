/* Ação de eventos sobre o botão menu da tag nav (mobile). */
/* Parâmetros: Nome do evento, função. */
openMenu.addEventListener('click', () => {

	/* Sobrepõe a propriedade display: none aplicada no
	   CSS por display: flex que o torna visível. */ 
	menu.style.display = "flex"

	/* Captura o tamanho do menu nav e aplica na posição. */
	menu.style.right = (menu.offsetWidth * -1) + 'px'

	/* Após 10 milésimos de segundo, adiciona o atributo style, */
	/* e adiciona as propriedades CSS.*/
	setTimeout(()=> {
		/* Faz o menu nav aparecer na velocidade em que foi
		   determinado na propriedade transition no CSS.*/
		menu.style.opacity = '1'

		/* Move o menu nav para a posição 0 a direita. Utiliza 
		   também a velocidade definida, na propriedade transition 
		   no CSS para realizar o movimento mais suave.*/
		menu.style.right = "0"

		/* Oculta o botão que torna visível o elemento nav.*/
		openMenu.style.display = 'none'
	}, 10);
})

/* Ação de eventos sobre o botão X da tag nav (mobile). */
/* Parâmetros: Nome do evento, função. */
closeMenu.addEventListener('click', () => {

	/* Faz o menu nav desaparecer na velocidade em que foi
	   determinado na propriedade transition no CSS. */
	menu.style.opacity = '0'

	/* Captura o tamanho do menu nav e aplica na posição. */
	menu.style.right = (menu.offsetWidth * -1) + 'px'

	/* Torna visível o botão que apresenta o menu nav. */
	/* openMenu.style.display = 'block'*/
	
	/* Após 200 milésimos de 1 segundo, remove o atributo style. */
	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "(PUC-RJ) Em relação à maritimidade e à continentalidade, é correto afirmar que",
    alternativaA : "as massas continentais são aquecidas e resfriadas mais lentamente do que as grandes massas que formam os oceanos.",
    alternativaB : "as temperaturas nas regiões centrais dos continentes variam mais do que em cidades litorâneas.",
    alternativaC : "as temperaturas diárias variam mais em cidades próximas aos litorais do que em outras, distantes deles.",
    alternativaD : "as massas oceânicas e continentais não têm influência direta nas amplitudes térmicas no planeta.",
    correta      : "as temperaturas nas regiões centrais dos continentes variam mais do que em cidades litorâneas.",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual das alternativas abaixo NÃO apresenta um elemento climático?",
    alternativaA : "Pressão atmosférica.",
    alternativaB : "Umidade.",
    alternativaC : "Temperatura.",
    alternativaD : "Correntes marítimas",
    correta      : "Correntes marítimas",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "A latitude é um importante fator climático que auxilia na caracterização do clima de uma localidade. Em zonas de baixa latitude, predomina clima do tipo",
    alternativaA : "equatorial.",
    alternativaB : "frio de montanha.",
    alternativaC : "mediterrânico.",
    alternativaD : "polar.",
    correta      : "equatorial.",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual é o tipo de clima caracterizado por temperaturas elevadas, alta umidade e chuvas frequentes ao longo do ano?",
    alternativaA : "Clima temperado",
    alternativaB : "Clima tropical",
    alternativaC : "Clima mediterrâneo",
    alternativaD : "Clima árido",
    correta      : "Clima tropical",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é o tipo de clima caracterizado por verões quentes, invernos frios e chuvas distribuídas ao longo do ano?",
    alternativaA : "Clima subtropical",
    alternativaB : "Clima polar",
    alternativaC : "Clima equatorial",
    alternativaD : "Clima continental",
    correta      : "Clima continental",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual é o tipo de clima caracterizado por verões quentes, invernos suaves e chuvas concentradas no inverno?",
    alternativaA : "Clima árido",
    alternativaB : "Clima temperado",
    alternativaC : "Clima mediterrâneo",
    alternativaD : "Clima tropical",
    correta      : "Clima mediterrâneo.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "As massas de ar são grandes porções de ar que influenciam diretamente o clima já que apresentam, por exemplo, temperatura e umidade características. As massas de ar que incidem no território brasileiro são classificadas em _________, _________ e ___________, de acordo com a latitude, e pela origem em _________ ou _________. As palavras que preenchem corretamente o texto são:",
    alternativaA : "temperada, polar, subtropical, continental e litorânea",
    alternativaB : "mediterrânea, antártica, subtropical, quente e fria",
    alternativaC : "temperada, glacial, desértica, meridional e litorânea",
    alternativaD : "equatorial, tropical, polar, continental e marítima",
    correta      : "equatorial, tropical, polar, continental e marítima",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual é o tipo de clima caracterizado por baixas temperaturas, neve e gelo durante o ano todo?",
    alternativaA : "Clima polar.",
    alternativaB : "Clima tropical.",
    alternativaC : "Clima árido.",
    alternativaD : "Clima temperado.",
    correta      : "Clima polar.",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é o tipo de clima caracterizado por temperaturas moderadas, estações bem definidas e precipitação distribuída ao longo do ano?",
    alternativaA : "Clima polar.",
    alternativaB : "Clima equatorial.",
    alternativaC : "Clima subtropical.",
    alternativaD : "Clima temperado.",
    correta      : "Clima temperado.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Assinale a alternativa que indica a melhor definição de bioma",
    alternativaA : "É uma unidade do espaço geográfico que possui características físicas em comum.",
    alternativaB : "É um espaço formado por plantas homogêneas que possuem estrutura semelhante.",
    alternativaC : "É uma área que tem um grande volume de espécies classificadas como endêmicas.",
    alternativaD : " É um recorte espacial que possui somente elementos das paisagens do tipo natural.",
    correta      : "É uma unidade do espaço geográfico que possui características físicas em comum.",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
