AOS.init();

const dataEvento = new Date('Jan 03, 2024 18:00:00');
const timeStampEvento = dataEvento.getTime();

const cronometro = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteEvento = timeStampEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMS = 1000 * 60

    const diasAteEvento = Math.floor(tempoAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((tempoAteEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((tempoAteEvento % horaEmMs) / minEmMS);
    const segundosAteEvento = Math.floor((tempoAteEvento % minEmMS) / 1000);

    document.getElementById('countdown').innerHTML = `O aniversário da sua pessoa favorita aconterá em ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (tempoAteEvento < 0) {
        clearInterval(cronometro);
        document.getElementById('countdown').innerHTML = 'Já foi! Espero que tenha aproveitado'
    }
}, 1000)