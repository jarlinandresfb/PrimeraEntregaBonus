const fs = require ('fs');
const http= require('http');

let opciones = {
	id:{
		alias:'i',
		demand : true
	},
	nombre:{
		alias:'n',
		demand : true
	},
	cedula:{
		alias:'c',
		demand : true
	}
};

let mensajeCursoInvalido = (curso) => {
	console.log('El id '+ curso + ' ingresado no corresponde a ningun curso.' + '\n');
}

let crearArchivo = (nombre,cedula,curso) => {
	texto = 'El estudiante ' + nombre +' con cedula ' + cedula +' se ha matriculado en el curso ' + curso.nombre +' con id: ' + curso.id +', tiene una duración de '+curso.duracion
	+' horas y un costo de ' +curso.costo+' pesos.';
	fs.writeFile('Inscripcion-'+curso.nombre+'-id-'+curso.id+'-'+nombre+'-'+cedula+'.txt',texto,(err) => {
		if (err) throw (err);
		console.log('Inscripcion exitosa (archivo creado)');
			
	});
	
}


let crearArchivoWeb = (nombre,cedula,curso) => {
	
http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8080);

function buildHtml(req) {
  var header = 'Inscripcion al curso:';
  var body = 'El estudiante ' + nombre +' con cedula ' + cedula +' se ha matriculado en el curso ' + curso.nombre +' con id: ' + curso.id +', tiene una duracion de '+curso.duracion
	+' horas y un costo de ' +curso.costo+' pesos.';

  // concatenate header (Titulo) string
  // concatenate body (Cuerpo) string

  return '<!DOCTYPE html>'
       + '<html><head><h1>' + header + '</h1></head><body><h2>' + body + '</h2></body></html>';
};


//Forma 2 de mostrar en web
// texto = 'El estudiante ' + nombre +' con cedula ' + cedula +' se ha matriculado en el curso ' + curso.nombre +' con id: ' + curso.id +', tiene una duracion de '+curso.duracion
	// +' horas y un costo de ' +curso.costo+' pesos.';
// 	http.createServer(function(req,resp){
// resp.write(texto);
// resp.end();
// }).listen(8080);
 console.log('Inscripcion exitosa (Server running)');
 console.log('Digite en su navegador: localhost:8080  para visualizar los detalles de la inscripcion');
 console.log('Si desea salir presione Ctrl+c en su consola');
}


module.exports = {
	opciones,
	mensajeCursoInvalido,
	crearArchivo,
	crearArchivoWeb
	
};