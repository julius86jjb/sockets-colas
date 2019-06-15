// Comando para establecer la conexion "activa-activa" con sockets

var socket = io();
var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

//tecnica para facilitarnos la vida :

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('connect', function() {
    console.log('Conectado al servidor')
});

socket.on('disconnect', function() {
    console.log('Desconectado al servidor')
});


socket.on('estadoActual', function(data) {
    // console.log(data);
    actualizarHmtl(data.ultimos4)


})

socket.on('ultimos4', function(data) {
    // console.log(data);
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizarHmtl(data.ultimos4)


})


function actualizarHmtl(ultimos4) {
    console.log(ultimos4);
    for (i = 0; i <= ultimos4.length - 1; i++) {
        lblTickets[i].text('Ticket: ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio: ' + ultimos4[i].escritorio)
    }
}