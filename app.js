
// Buscar os elementos no HTML atraves do id
const caixaTexto = document.getElementById('texto-transcrito');
const botaoTranscricao = document.getElementById('transcrever');

// Funcionalidade do GOOGLE CHROME para reconhecer fala - webkitSpeechRecognition
// Obs: Para outro navegador, utiliza-se outra funcionalidade   (Safari - SpeechRecognition)
const reconhecimento = new webkitSpeechRecognition();

// onresult - Informa como se comportar quando tiver escutado algo e transcreve
// Evento realizado quando a transcricao estiver completa
// innerText - Mostra o texto existente dentro do elemento
reconhecimento.onresult = (evento) => {
    const transcricao = evento.results[0][0].transcript;
    caixaTexto.innerText = transcricao;
};



botaoTranscricao.addEventListener('click', () => reconhecimento.start());
