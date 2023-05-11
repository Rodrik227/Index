// ------------------------------------------------LIGAR
function inicio() {
    setTimeout(turnon, 5000)
    console.log('ta indo')
}
function turnon() {
    let inicio = document.getElementById('on')
    let body = document.getElementById('body')

    console.log('foi')
    inicio.classList.add('hidden')
    inicio.classList.remove('on')
    body.classList.remove('hidden')
}

// ------------------------------------------------RELOGIO
    function getHours() {
        let clock = document.getElementById('time')
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()

        let hour = hours < 10 ? `0${hours}` :hours
        let minute = minutes < 10 ? `0${minutes}` :minutes
        clock.innerHTML = `${hour}:${minute}`
    }

    function menu() {
        const menu = document.getElementById('menuAll')

        if (menu.classList.contains('opened'))  {
            menu.classList.remove('opened')
            menu.classList.add('hidden')
            console.log('fechar botao')
        }
        else {
            menu.classList.remove('hidden')
            menu.classList.add('opened')
            console.log('abrir')
        }
    }
    
    document.addEventListener('mouseup', function(e) {
        const menu = document.getElementById('taskbar');
        if (!menu.contains(e.target)) {
            menu.classList.add('hidden');
            menu.classList.remove('opened')
            console.log('fechar')
        }
    });
setInterval(() => {
    getHours()
}, 10000)

inicio()