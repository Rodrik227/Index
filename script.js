// ------------------------------------------------LIGAR
function inicio() {
    setTimeout(turnon, 5000)
    console.log('opening')
}
function turnon() {
    const inicio = document.getElementById('on')
    const body = document.getElementById('body')

    inicio.classList.add('hidden')
    inicio.classList.remove('on')
    body.classList.remove('hidden')
}

// ------------------------------------------------RELOGIO
function getHours() {
    const clock = document.getElementById('time')
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    clock.innerHTML = `${hour}:${minute}`
}
// ------------------------------------------------MENU
function menu() {
    const menu = document.getElementById('menuAll')

    if (menu.classList.contains('opened')) {
        menu.classList.remove('opened')
        menu.classList.add('hidden')
    }
    else {
        menu.classList.remove('hidden')
        menu.classList.add('opened')
    }
}

const selectedApps = document.querySelectorAll('.oneApp')

document.addEventListener('mouseup', function (e) {
    const bar = document.getElementById('taskbar');
    const menu = document.getElementById('menuAll')
    selectedApps.forEach((elmnt) => {
        elmnt.classList.remove('click')
    });
    if (!bar.contains(e.target)) {
        menu.classList.add('hidden');
        menu.classList.remove('opened')
    }
});



selectedApps.forEach((selectedApp) => {
    selectedApp.addEventListener("click", () => {
        selectedApps.forEach((elmnt) => {
            elmnt.classList.remove('click')
        });
        selectedApp.classList.add('click')
    })
})
// ------------------------------------------------SELECT APP INTERFACE
const Apps = [
    {
        title: "Template",
        Subject: "Teste",
        Data: "00/00/00",
        Img: "Placeholder.jpg",
        Text: "Texto teste pra essa poha",
        Link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: "Indicações",
        Subject: "Técnico",
        Data: "24/04/2023",
        Img: "indicacoes.jpg",
        Text: "Considerando os conhecimentos já adquiridos em HTML, CSS e JS, utilizar os mesmos e aprofundar para criar uma webpage (página na internet) sobre osconteúdos básicos de Front-End, sendo esta a temática principal para as recomendações de:</p>1 site de conteúdos (deve ter o link pro site 1 canal Youtube de conteúdos (deve ter o link e 1 vídeo embedado)1 influenciador de conteúdos (deve ter o link e um material embedado)1 tutorial (deve ter o link e uma imagem do resultado do tutorial)1 podcast (link embedado de só áudio preferencialmente, mas pode ser vídeo)",
        Link: "/indicacoes"
    },
    {
        title: "Trabalho de PP",
        Subject: "Projeto Profissional",
        Data: "15/05/2023",
        Img: "PP.jpg",
        Text: "A poluição é um assunto muito em alta hoje em dia, pelo fato do alto nível de poluição no nosso planeta. Nós queremos ajudar a resolver. Por meio da conscientização das formas de limpeza e de poluição.",
        Link: "/PP"
    },
    {
        title: "Kat Generator",
        Subject: "Técnico",
        Data: "05/05/2023",
        Img: "kat.jpg",
        Text: "A partir do código exemplo em https://arquivo.dev/t1/oficina.html modificar o arquivo html, com temática livre, inserindo algum novo elemento nesta webpage(exemplo, um vídeo, um link, um javascript), e anexar este novo documento html personalizado aqui nesta tarefa.",
        Link: "/kat"
    },
]
const h1 = document.getElementById('h1')
const h2 = document.getElementById('h2')
const p = document.getElementById('p')
const imgH = document.getElementById('img')
const dataH = document.getElementById('data')
const subjectH = document.getElementById('subject')
const a = document.getElementById('link')

function select(AppId) {
    const id = Apps[AppId]
    const title = id.title;
    const subject = id.Subject;
    const Data = id.Data;
    const Img = id.Img;
    const text = id.Text;
    const link = id.Link;

    h1.innerHTML = title;
    dataH.innerHTML = Data;
    subjectH.innerHTML = subject;
    imgH.src = `./assets/${Img}`
    p.innerHTML = text;
    a.href = link;
    a.target = "_blank";
}
const janela = document.getElementById('janela')
function openW() {
    console.log
    janela.classList.remove('hidden')
    janela.classList.add('window')
}
function close() {
    console.log('close')
    janela.classList.remove('window')
    janela.classList.add('hidden')
}
function createApps() {
    
}
setInterval(() => {
    getHours()
}, 10000)

document.getElementById('sofrimento').addEventListener('click', close)

inicio()