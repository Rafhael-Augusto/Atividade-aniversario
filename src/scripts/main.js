AOS.init();

const dataDoEvento = new Date("july 21, 2025 20:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function() {
    const dataAtual = new Date()
    const timeStampAtual = dataAtual.getTime()

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60
    const segundoEmMs = 1000

    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs)
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs) //% retorna o resto da divisão dos dias
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs)
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoEmMs) / segundoEmMs)

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras)

        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000)